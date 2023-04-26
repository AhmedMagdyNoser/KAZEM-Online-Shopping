const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system


// create category 
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
    .isLength({ min: 5 })
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


// update category 
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

      // 2- CHECK IF CATEGORY EXISTS OR NOT 
      const query = util.promisify(connection.query).bind(connection);
      const category = await query('SELECT * FROM category WHERE id = ?', [req.params.id]);
      if (!category[0]) {
        return res.status(404).json({ ms: 'Category not found!' });
      }

      // 3- PREPARE CATEGORY OBJECT
      const categoryObj = {
        title: req.body.title || category[0].e,
        description: req.body.description || category[0].description,
        // ... other fields to update
      };

      if (req.file && category[0].img) {
        categoryObj.img = req.file.filename;
        fs.unlinkSync('./upload/' + category[0].img); // delete old image
      } else {
        categoryObj.img = category[0].img;
      }

      // 4- UPDATE CATEGORY
      await query('UPDATE category SET ? WHERE id = ?', [categoryObj, category[0].id]);

      // 5- SEND RESPONSE 
      res.status(200).json({
        msg: 'Category updated successfully',
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


// Delete category 
router.delete('/delete/:id', admin, (req, res) => {
  const categoryId = req.params.id;

  // First, retrieve the image field of the category using the specified id
  const selectSql = 'SELECT img FROM category WHERE id = ?';

  try {
    connection.query(selectSql, [categoryId], (err, selectResult) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      // If the query returns a result with a non-empty image field, delete the corresponding image file
      if (selectResult[0] && selectResult[0].img) {
        fs.unlinkSync(`./upload/${selectResult[0].img}`);
      }

      // Then, delete the category using the specified id
      const deleteSql = 'DELETE FROM category WHERE id = ?';

      connection.query(deleteSql, [categoryId], (err, deleteResult) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // If no rows were affected by the delete query, return a 404 error
        if (deleteResult.affectedRows === 0) {
          return res.status(404).json({ error: 'Category not found' });
        }

        return res.json({ message: 'Category deleted successfully' });
      });
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