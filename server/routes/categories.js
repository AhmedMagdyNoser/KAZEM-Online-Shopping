const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system


//create category 
router.post(
  "/create",
  admin,
  upload.single("image"),
  body("title")
    .isString()
    .withMessage("please enter a valid category title"),

  body("description")
    .isString()
    .withMessage("please enter a valid description")
    .isLength({ min: 10 })
    .withMessage("description name should be at lease 20 characters"),
  async (req, res) => {
    try {
      // 1- VALIDATION REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- VALIDATE THE IMAGE
      if (!req.file) {
        return res.status(400).json({
          errors: [
            {
              msg: "Image is Required",
            },
          ],
        });
      }

      // 3- PREPARE category OBJECT
      const category = {
        title: req.body.title,
        description: req.body.description,
        img: req.file.filename,
      };

      // 4 - INSERT category INTO DB
      const query = util.promisify(connection.query).bind(connection);
      await query("insert into category set ? ", category);
      res.status(200).json({
        message: "category created successfully !",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);


//update category 
router.put(
  '/update/:id',
  admin,
  upload.single('img'),
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if product exists
      const query = util.promisify(connection.query).bind(connection);
      const product = await query('SELECT * FROM product WHERE id = ?', [req.params.id]);
      console.log('product:', product);
      if (!product[0]) {
        return res.status(404).json({ ms: 'Product not found!' });
      }

      // Prepare product object
      const productObj = {
        title: req.body.title || product[0].title,
        description: req.body.description || product[0].description,
        cat_id: req.body.cat_id || product[0].cat_id,
        price: req.body.price || product[0].price,
        brand: req.body.brand || product[0].brand,
      };

      if (req.file && product[0].img) {
        productObj.img = req.file.filename;
        const filePath = './upload/' + product[0].img;
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } else {
        productObj.img = product[0].img;
      }

      console.log('productObj:', productObj);

      // Update product
      const result = await query('UPDATE product SET ? WHERE id = ?', [productObj, product[0].id]);
      console.log('result:', result);

      // Send response
      res.status(200).json({ msg: 'Product updated successfully' });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


// Delete category 
router.delete('/delete/:id', admin, (req, res) => {
  const categoryId = req.params.id;

  // To delete the img from the uploads (Doesn't Work)
  // const deletedCategory = query('SELECT * FROM category WHERE id = ?', [categoryId]);
  // fs.unlinkSync('./upload/' + deletedCategory[0].img);

  const sql = 'DELETE FROM category WHERE id = ?';

  try {
    connection.query(sql, [categoryId], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Category not found' });
      }


      return res.json({ message: 'Category deleted successfully' });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


// list all the categories 
router.get("/getAll", async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const categories = await query(`select * from category`);
  categories.map((category) => {
    category.image = "http://" + req.hostname + ":5000/" + category.img;
  });
  res.status(200).json(categories);
});


// show specific category 
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  const sql = 'SELECT * FROM category WHERE id = ?';
  connection.query(sql, [categoryId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    } else if (results.length === 0) {
      return res.status(404).json({ error: `Category with ID ${categoryId} not found` });
    } else {
      let requiredCategory = results[0];
      requiredCategory.image = "http://" + req.hostname + ":5000/" + requiredCategory.img;
      return res.json(requiredCategory);
    }
  });
});



module.exports = router;