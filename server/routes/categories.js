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

 
  module.exports = router;