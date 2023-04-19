const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system


// Define an API endpoint to add a rating to a product
router.post('/:product_id', (req, res) => {
  const productId = req.params.product_id;
  const userId = req.body.user_id;
  const rating = req.body.rating;

  // Insert the new rating into the ratings table
  connection.query(
    'INSERT INTO rating (user_id, prod_id, rate) VALUES (?, ?, ?)',
    [userId, productId, rating],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).send('Rating added successfully');
      }
    }
  );
});

// Update a rating of a user to a specific product
router.put('/:user_id/:prod_id', async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    const result = await query(
      'UPDATE rating SET rate = ? WHERE user_id = ? AND prod_id = ?',
      [req.body.rate, req.params.user_id, req.params.prod_id]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ updated: true });
    } else {
      res.status(404).json({ error: 'Rating not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Check if a user has already rated a specific product
router.get('/:user_id/:prod_id', async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    const rows = await query(
      'SELECT rate FROM rating WHERE user_id = ? AND prod_id = ?',
      [req.params.user_id, req.params.prod_id]
    );

    if (rows.length > 0) {
      res.status(200).json({ rated: true, rate: rows[0].rate });
    } else {
      res.status(200).json({ rated: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Define an API endpoint to calculate the rating of a product
router.get('/:product_id', (req, res) => {
  const productId = req.params.product_id;

  // Retrieve the ratings for the specified product from the ratings table
  connection.query(
    'SELECT AVG(rate) AS rating FROM rating WHERE prod_id = ?',
    [productId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        let rating = result[0].rating;
        rating = Math.round(rating * 10) / 10; // rounding
        res.status(200).send(`${rating}`);
      }
    }
  );
});

// Delete a rating of a user to a specific product
router.delete('/:user_id/:prod_id', async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    const result = await query(
      'DELETE FROM rating WHERE user_id = ? AND prod_id = ?',
      [req.params.user_id, req.params.prod_id]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ deleted: true });
    } else {
      res.status(404).json({ error: 'Rating not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error: ' + error.message });
  }
});


module.exports = router;