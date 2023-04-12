
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
  

router.put('/update/:id',
    admin,
    async (req, res) => {
    try {
      // 1- VALIDATE REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      // 2- CHECK IF USER EXISTS OR NOT 
      const query = util.promisify(connection.query).bind(connection);
      const user = await query('SELECT * FROM users WHERE id = ?', [req.params.id]);
      if (!user[0]) {
        return res.status(404).json({ ms: 'User not found!' });
      }
  
      // 3- PREPARE USER OBJECT
      const userObj = {
        first_name: req.body.first_name || user[0].first_name,
        last_name: req.body.last_name || user[0].last_name,
        email: req.body.email || user[0].email,
        phone: req.body.phone || user[0].phone,
        address: req.body.address || user[0].address,
        password: req.body.password || user[0].password,
        status: req.body.status !== undefined ? req.body.status : user[0].status,
        type: req.body.type !== undefined ? req.body.type : user[0].type,
      };
  
      // Check if the new email already exists in the database
      if (req.body.email && req.body.email !== user[0].email) {
        const emailExists = await query('SELECT * FROM users WHERE email = ?', [req.body.email]);
        if (emailExists.length > 0) {
          return res.status(400).json({ message: 'Email already exists. Please choose another email.' });
        }
      }
  
      // Hash the password if it's been updated
      if (req.body.password) {
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
          if (err) {
            console.error("Error hashing password:", err);
            res.status(500).json({ message: "An error occurred while updating the user" });
            return;
          }
          userObj.password = hashedPassword;
          // Update the user in the database
          query('UPDATE users SET ? WHERE id = ?', [userObj, user[0].id])
            .then(() => {
              res.status(200).json({
                msg: 'User updated successfully',
              });
            })
            .catch((err) => {
              console.error("Error updating user in database:", err);
              res.status(500).json({ message: "An error occurred while updating the user" });
            });
        });
      } else {
        // Update the user in the database
        await query('UPDATE users SET ? WHERE id = ?', [userObj, user[0].id]);
        res.status(200).json({
          msg: 'User updated successfully',
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



module.exports = router;
