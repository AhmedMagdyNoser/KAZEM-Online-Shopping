const router = require("express").Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const connection = require('../db_connection');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const jwt = require("jsonwebtoken");

// Authorization middleware function


// Register
router.post("/register", (req, res) => {
  const { firstName, lastName, email, phone, address, password } = req.body;

  // Check if a user with the same email already exists in the database
  const sql = 'SELECT * FROM users WHERE email = ?';
  connection.query(sql, [email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error checking user');
      return;
    }
    if (result.length > 0) {
      res.status(409).send('User already exists');
      return;
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password:", err);
        res.status(500).json({ message: "An error occurred while registering the user" });
        return hashedPassword;
      }

      // Insert the user into the database with the hashed password
      connection.query(
        "INSERT INTO users (first_name, last_name, email, password, phone, address) VALUES (?, ?, ?, ?, ?, ?)",
        [firstName, lastName, email, hashedPassword, phone, address],
        (err, result) => {
          if (err) {
            console.error("Error inserting user into database:", err);
            res.status(500).json({ message: "An error occurred while registering the user" });
            return;
          }

          // Generate a token
          const token = crypto.randomBytes(16).toString("hex");

          // Update the user's token in the database
          connection.query(
            "UPDATE users SET token = ? WHERE email = ?",
            [token, email],
            (err, result) => {
              if (err) {
                console.error(
                  "Error updating user token in database:",
                  err
                );
                res.status(500).json({
                  message:
                    "An error occurred while registering the user",
                });
                return;
              }

              // Return the token to the user
              res.status(201).json({ token: token });
            }
          );
        }
      );
    });
  });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Get the user with the corresponding email from the database
  const query = util.promisify(connection.query).bind(connection);
  const user = await query("SELECT * FROM users WHERE email = ?", [email]);

  // Check if the user exists and the password is correct
  if (user.length > 0) {
    bcrypt.compare(password, user[0].password, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while logging in" });
        return;
      }

      if (result) {
        // Use the token from the register endpoint
        // const token = user[0].token;

        // Return the user data and token to the client
        res.json({ 
          user: {
            id: user[0].id,
            first_name: user[0].first_name,
            last_name: user[0].last_name,
            email: user[0].email,
            token: user[0].token,
            status: user[0].status,
            type: user[0].type,
            // add more user data here as needed
          },
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

module.exports = router;