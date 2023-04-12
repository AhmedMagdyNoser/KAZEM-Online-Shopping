
const router = require("express").Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const connection = require('../db_connection');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const jwt = require("jsonwebtoken");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');


router.post("/create",admin, (req, res) => {
    const { firstName, lastName, email, phone, address, password , status,type} = req.body;
  
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
          "INSERT INTO users (first_name, last_name, email, password, phone, address ,status,type) VALUES (?, ?, ?, ?, ?, ?,?,?)",
          [firstName, lastName, email, hashedPassword, phone, address,status,type],
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

module.exports = router;
