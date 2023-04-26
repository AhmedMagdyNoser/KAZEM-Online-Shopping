const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system

// Create a new order for a user with the items in their cart
router.post('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

  // Get the items in the user's cart
  connection.query('SELECT * FROM cart WHERE user_id = ?', userId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const items = results;

      // Create a new order
      const order = {
        user_id: userId,
        order_date: new Date(),
        deliver_date: null,
        status: 'processing'
      };

      // Insert the new order into the database
      connection.query('INSERT INTO orders SET ?', order, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          const orderId = result.insertId;

          // Add the items in the cart to the order
          items.forEach((item) => {
            const orderItem = {
              order_id: orderId,
              prod_id: item.prod_id,
              quantity: item.quantity
            };

            // Insert the order item into the database
            connection.query('INSERT INTO order_item SET ?', orderItem, (err, result) => {
              if (err) {
                res.status(500).send(err);
              }
            });

            // Delete the item from the cart
            connection.query('DELETE FROM cart WHERE id = ?', item.id, (err, result) => {
              if (err) {
                res.status(500).send(err);
              }
            });
          });

          res.send(`Order ${orderId} created successfully`);
        }
      });
    }
  });
});

// Update the status of an order to 'shipping' and set the delivery date to two days from the current date
router.put('/shipping/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);

  // Calculate the delivery date as two days from the current date
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 2);

  // Update the status and delivery date of the order
  connection.query('UPDATE orders SET status = ?, deliver_date = ? WHERE id = ?', ['shipping', deliveryDate, orderId], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send(`Order ${orderId} not found`);
    } else {
      res.send(`Order ${orderId} status updated to 'shipping' and delivery date set to ${deliveryDate}`);
    }
  });
});

// Get all orders
router.get('/all', (req, res) => {
  const query = `
  SELECT orders.*, users.first_name, users.last_name, users.email, users.address,
    product.id AS prod_id, product.title AS prod_title, product.price AS prod_price,
    order_item.quantity AS prod_qty, (product.price * order_item.quantity) AS prod_cost
  FROM orders
  JOIN users ON orders.user_id = users.id
  JOIN order_item ON orders.id = order_item.order_id
  JOIN product ON order_item.prod_id = product.id
  GROUP BY orders.id, order_item.id
`;

  connection.query(query, (error, results) => {
    if (error) {
      console.log(error);
      return res.sendStatus(500);
    }

    const orders = {};
    results.forEach(row => {
      const orderId = row.id;
      orders[orderId] = orders[orderId] || {
        id: orderId,
        user_id: row.user_id,
        order_date: row.order_date,
        deliver_date: row.deliver_date,
        status: row.status,
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email,
        address: row.address,
        total_cost: 0,
        products: []
      };

      const product = {
        id: row.prod_id,
        title: row.prod_title,
        price: row.prod_price,
        quantity: row.prod_qty,
        cost: row.prod_cost
      };

      orders[orderId].products.push(product);
      orders[orderId].total_cost += row.prod_cost;
    });

    res.json(Object.values(orders));
  });
});

// Get all proccessing orders
router.get('/allproccessing', (req, res) => {
  const query = `
    SELECT orders.*, users.first_name, users.last_name, users.email, users.address,
      product.id AS prod_id, product.title AS prod_title, product.price AS prod_price,
      order_item.quantity AS prod_qty, (product.price * order_item.quantity) AS prod_cost
    FROM orders
    JOIN users ON orders.user_id = users.id
    JOIN order_item ON orders.id = order_item.order_id
    JOIN product ON order_item.prod_id = product.id
    WHERE orders.status = 'processing'
    GROUP BY orders.id, order_item.id
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.log(error);
      return res.sendStatus(500);
    }

    const orders = {};
    results.forEach(row => {
      const orderId = row.id;
      orders[orderId] = orders[orderId] || {
        id: orderId,
        user_id: row.user_id,
        order_date: row.order_date,
        deliver_date: row.deliver_date,
        status: row.status,
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email,
        address: row.address,
        total_cost: 0,
        products: []
      };

      const product = {
        id: row.prod_id,
        title: row.prod_title,
        price: row.prod_price,
        quantity: row.prod_qty,
        cost: row.prod_cost
      };

      orders[orderId].products.push(product);
      orders[orderId].total_cost += row.prod_cost;
    });

    res.json(Object.values(orders));
  });
});

// Get all orders for a specific user
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT orders.*, users.first_name, users.last_name, users.email, users.address,
      product.id AS prod_id, product.title AS prod_title, product.price AS prod_price,
      order_item.quantity AS prod_qty, (product.price * order_item.quantity) AS prod_cost
    FROM orders
    JOIN users ON orders.user_id = users.id
    JOIN order_item ON orders.id = order_item.order_id
    JOIN product ON order_item.prod_id = product.id
    WHERE orders.user_id = ?
    GROUP BY orders.id, order_item.id
  `;

  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.log(error);
      return res.sendStatus(500);
    }

    const orders = {};
    results.forEach(row => {
      const orderId = row.id;
      orders[orderId] = orders[orderId] || {
        id: orderId,
        user_id: row.user_id,
        order_date: row.order_date,
        deliver_date: row.deliver_date,
        status: row.status,
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email,
        address: row.address,
        total_cost: 0,
        products: []
      };

      const product = {
        id: row.prod_id,
        title: row.prod_title,
        price: row.prod_price,
        quantity: row.prod_qty,
        cost: row.prod_cost
      };

      orders[orderId].products.push(product);
      orders[orderId].total_cost += row.prod_cost;
    });

    res.json(Object.values(orders));
  });
});

module.exports = router;