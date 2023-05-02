const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system


//create product
router.post('/create', admin,
  upload.single('image'),
  [
    body('title')
      .isString()
      .withMessage('Title must be a string'),
    body('description')
      .isString()
      .withMessage('Description must be a string'),
    body('cat_id')
      .isNumeric()
      .withMessage('cat_id must be a number'),
    body('price')
      .isNumeric()
      .withMessage('Price must be a number'),
    body('brand')
      .isString()
      .withMessage('Brand must be a string'),
  ], async (req, res) => {
    try {
      // 1- VALIDATE REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- VALIDATE THE IMAGE
      if (!req.file) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Image is required',
            },
          ],
        });
      }

      // 3- PREPARE PRODUCT OBJECT
      const product = {
        title: req.body.title,
        description: req.body.description,
        cat_id: req.body.cat_id,
        price: req.body.price,
        brand: req.body.brand,
        img: req.file.filename,
      };

      // 4 - INSERT PRODUCT INTO DB
      const query = util.promisify(connection.query).bind(connection);
      await query('INSERT INTO product SET ?', product);
      res.status(200).json({
        message: 'Product created successfully!',
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


//update product
router.put('/update/:id',
  admin,
  upload.single('image'),

  async (req, res) => {
    try {
      // 1- VALIDATE REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- CHECK IF PRODUCT EXISTS OR NOT 
      const query = util.promisify(connection.query).bind(connection);
      const product = await query('SELECT * FROM product WHERE id = ?', [req.params.id]);
      if (!product[0]) {
        return res.status(404).json({ ms: 'Product not found!' });
      }

      // 3- PREPARE PRODUCT OBJECT
      const productObj = {
        title: req.body.title || product[0].title,
        description: req.body.description || product[0].description,
        cat_id: req.body.cat_id || product[0].cat_id,
        price: req.body.price || product[0].price,
        brand: req.body.brand || product[0].brand,
      };

      if (req.file && product[0].img) {
        productObj.img = req.file.filename;
        fs.unlinkSync('./upload/' + product[0].img); // delete old image
      } else {
        productObj.img = product[0].img;
      }

      // 4- UPDATE PRODUCT
      await query('UPDATE product SET ? WHERE id = ?', [productObj, product[0].id]);

      // 5- SEND RESPONSE 
      res.status(200).json({
        msg: 'Product updated successfully',
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  });


//delete product
router.delete('/delete/:id', admin, (req, res) => {
  const productId = req.params.id;

  // First, retrieve the image field of the product using the specified id
  const selectSql = 'SELECT img FROM product WHERE id = ?';

  try {
    connection.query(selectSql, [productId], (err, selectResult) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      // If the query returns a result with a non-empty image field, delete the corresponding image file
      if (selectResult[0] && selectResult[0].img) {
        fs.unlinkSync(`./upload/${selectResult[0].img}`);
      }

      // Then, delete the product using the specified id
      const deleteSql = 'DELETE FROM product WHERE id = ?';

      connection.query(deleteSql, [productId], (err, deleteResult) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // If no rows were affected by the delete query, return a 404 error
        if (deleteResult.affectedRows === 0) {
          return res.status(404).json({ error: 'Product not found' });
        }

        return res.json({ message: 'Product deleted successfully' });
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/getAll', async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  let search = '';
  if (req.query.search) {
    // QUERY PARAMS
    search = `WHERE title LIKE '%${req.query.search}%' OR description LIKE '%${req.query.search}%'`;
  }
  const products = await query(`SELECT * FROM product ${search} ORDER BY RAND()`);
  products.map((product) => {
    product.image = 'http://' + req.hostname + ':5000/' + product.img;
  });
  res.status(200).json(products);
});



// Show Specific Product
router.get('/get/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT * FROM product WHERE id = ?';
  connection.query(sql, [productId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      return res.status(404).json({ error: `Product with ID ${productId} not found` });
    } else {
      results[0].image = 'http://' + req.hostname + ':5000/' + results[0].img; // update image URL
      return res.json(results[0]);
    }
  });
});



router.get('/filter/:cat_id', (req, res) => {
  const cat_id = req.params.cat_id;
  const query = `SELECT * FROM product WHERE cat_id = ${cat_id}`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving products');
    } else if (results.length === 0) {
      res.status(404).send('This category does not exist');
    } else {
      for (let result of results) {
        result.image = `http://${req.hostname}:5000/${result.img}`;
      }
      res.status(200).json(results);
    }
  });
});



// API endpoint for filtering products
router.get('/filteration', (req, res) => {
  const categories = req.query.categories ? req.query.categories.split(',') : [];
  const minPrice = req.query.minPrice || 0;
  const maxPrice = req.query.maxPrice || Number.MAX_SAFE_INTEGER;

  // build SQL query based on filters
  let sql = 'SELECT * FROM product';
  const values = [];
  if (categories.length > 0) {
    sql += ` WHERE cat_id IN (${categories.map(() => '?').join(',')})`;
    values.push(...categories);
  }

  if (categories.length > 0) {
    sql += ' AND';
  } else {
    sql += ' WHERE';
  }
  sql += ' price >= ? AND price <= ?';
  values.push(minPrice, maxPrice);

  // execute SQL query
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log(error);
    } else {
      for (let result of results) {
        result.image = `http://${req.hostname}:5000/${result.img}`;
      }
      res.json(results);
    }
  });
});

module.exports = router;
