
const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system

router.post("/create", (req, res) => {
    const { user_id, prod_id, quantity } = req.body;
  
    // Check if the user and product exist in the database
    const userSql = 'SELECT * FROM users WHERE id = ?';
    connection.query(userSql, [user_id], (err, userResult) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error checking user');
        return;
      }
      if (userResult.length === 0) {
        res.status(404).send('User not found');
        return;
      }
  
      const prodSql = 'SELECT * FROM product WHERE id = ?';
      connection.query(prodSql, [prod_id], (err, prodResult) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error checking product');
          return;
        }
        if (prodResult.length === 0) {
          res.status(404).send('Product not found');
          return;
        }
  
        // Insert the cart item into the database
        const cartSql = 'INSERT INTO cart (user_id, prod_id, quantity) VALUES (?, ?, ?)';
        connection.query(cartSql, [user_id, prod_id, quantity], (err, cartResult) => {
          if (err) {
            console.error("Error inserting cart item into database:", err);
            res.status(500).json({ message: "An error occurred while adding the product to the cart" });
            return;
          }
  
          res.status(201).json({ message: "Product added to cart" });
        });
      });
    });
});
  


//update cart 
router.put('/update/:id',
    async (req, res) => {
    try {
      // 1- VALIDATE REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      // 2- CHECK IF CART EXISTS OR NOT 
      const query = util.promisify(connection.query).bind(connection);
      const cart = await query('SELECT * FROM cart WHERE id = ?', [req.params.id]);
      if (!cart[0]) {
        return res.status(404).json({ ms: 'Cart not found!' });
      }
  
      // 3- PREPARE CART OBJECT
      const cartObj = {
        user_id: req.body.user_id || cart[0].user_id,
        prod_id: req.body.prod_id || cart[0].prod_id,
        quantity: req.body.quantity || cart[0].quantity,
      };
  
      // Update the cart in the database
      await query('UPDATE cart SET ? WHERE id = ?', [cartObj, cart[0].id]);
      res.status(200).json({
        msg: 'Cart updated successfully',
      });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    });
 
    router.get('/get/:userId',
    async (req, res) => {
      try {
        const query = util.promisify(connection.query).bind(connection);
        const cartItems = await query('SELECT * FROM cart WHERE user_id = ?', [req.params.userId]);
  
        if (cartItems.length === 0) {
          return res.status(404).json({ msg: 'Cart is empty!' });
        }
  
        res.status(200).json({
          cart: cartItems,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
module.exports = router;