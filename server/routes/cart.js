
const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system

//add to cart
router.post(
  "/add",
  body("user_id")
    .not().isEmpty()
    .withMessage("User id is required"),
  body("prod_id")
    .not().isEmpty()
    .withMessage("Product id is required"),
  body("quantity")
    .not().isEmpty()
    .withMessage("product quantity is required"),
  async (req, res) => {
    try {
      // 1- VALIDATE REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- PREPARE FAVORITE OBJECT
      const favorite = {
        user_id: req.body.user_id,
        prod_id: req.body.prod_id,
        quantity: req.body.quantity
      };

      // 3- INSERT FAVORITE INTO DB
      const query = util.promisify(connection.query).bind(connection);
      await query("INSERT INTO cart SET ?", favorite);
      res.status(200).json({
        message: "cart created successfully!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// API endpoint to check if a product is in the cart for a specific user
router.get('/check/:userId/:productId', (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  // Query the cart table to check if the product is already in the cart for the user
  connection.query('SELECT * FROM cart WHERE user_id = ? AND prod_id = ?', [userId, productId], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error!');
      return;
    }

    if (results.length > 0) {
      // Product is already in the cart for the user
      res.json({
        inCart: true,
        cartItemId: results[0].id
      });
    } else {
      // Product is not in the cart for the user
      res.json({
        inCart: false
      });
    }
  });
});

// Define an API endpoint to update the quantity of a product in a cart
router.put('/:user_id/:prod_id', (req, res) => {
  const { user_id, prod_id } = req.params;
  const { quantity } = req.body;

  if (quantity === undefined) {
    res.status(400).send('Bad request: quantity parameter is missing');
    return;
  }

  // Update the cart item with the new quantity
  connection.query(
    'UPDATE cart SET quantity = ? WHERE user_id = ? AND prod_id = ?',
    [quantity, user_id, prod_id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else if (!results.affectedRows) {
        res.status(404).send('Cart item not found');
      } else {
        res.status(200).send('Cart item updated successfully');
      }
    }
  );
});

//show cart for a specific user 
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

// Define an API endpoint to calculate the total cost of all items in the cart
router.get('/total/:user_id', (req, res) => {
  const userId = req.params.user_id;

  // Get the total cost of all items in the cart for the specified user
  connection.query(
    'SELECT SUM(quantity * price) AS total_cost FROM cart c JOIN product p ON c.prod_id = p.id WHERE c.user_id = ?',
    [userId],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        const totalCost = results[0].total_cost || 0;
        res.status(200).json({ total_cost: totalCost });
      }
    }
  );
});

//delete the cart for this user 
router.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id;

  const sql = 'DELETE FROM cart WHERE user_id = ?';

  try {
    const query = util.promisify(connection.query).bind(connection);
    const result = await query(sql, [userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cart not found for this user' });
    }

    return res.json({ message: 'Cart deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


//remove specific product from the cart of a specific user 
router.delete('/remove/:id', async (req, res) => {
  const userId = req.params.id;
  const prodId = req.body.prod_id; // assuming prod_id is sent in the request body

  const sql = 'DELETE FROM cart WHERE user_id = ? AND prod_id = ?';

  try {
    const query = util.promisify(connection.query).bind(connection);
    const result = await query(sql, [userId, prodId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'product in your cart not found' });
    }

    return res.json({ message: 'product deleted successfully from your cart' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;