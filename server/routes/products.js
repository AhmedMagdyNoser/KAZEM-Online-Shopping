const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system



router.post('/create', admin,
    upload.single('img'),
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
  });




router.put('/update', admin,(req, res) => {
    res.status(200).json({
        message:"product updated", 
    })
})


router.delete('/delete', (req, res) => {
    res.status(200).json({
        message:"product deleted", 
    })
})


router.get('/get', (req, res) => {
    res.status(200).json({
        message:"get all products ", 
    })
})












module.exports = router;
