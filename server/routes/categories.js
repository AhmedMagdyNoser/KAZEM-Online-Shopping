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
    upload.single("img"),
    body("title")
      .isString()
      .withMessage("please enter a valid category title"),
  
    body("description")
      .isString()
      .withMessage("please enter a valid description ")
      .isLength({ min: 20 })
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

 //=======================================
 router.put(
  "/update/:id", // params
  admin,
  upload.single("image"), // change the key to "image"
  async (req, res) => {
    try {
      // 1- VALIDATE REQUEST [manual, express validation]
      const query = util.promisify(connection.query).bind(connection);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- CHECK IF CATEGORY EXISTS OR NOT 
      const category = await query("select * from category where id = ?", [
        req.params.id,
      ]);
      if (!category[0]) {
        return res.status(404).json({ ms: "category not found !" });
      }

      // 3- PREPARE CATEGORY OBJECT
      const categoryObj = {
        title: req.body.title,
        description: req.body.description,
      };

      if (req.file && category[0].image_url) {
        categoryObj.image_url = req.file.filename;
        fs.unlinkSync("./upload/" + category[0].image_url); // delete old image
      }

      // 4- UPDATE CATEGORY
      await query("update category set ? where id = ?", [categoryObj, category[0].id]);

      // 5- SEND RESPONSE 
      res.status(200).json({
        msg: "category updated successfully",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
);
//==================================================
router.delete('/delete/:id',admin, (req, res) => {
  const categoryId = req.params.id;

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

 
  module.exports = router;