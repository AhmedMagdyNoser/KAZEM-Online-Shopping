const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/upload_images');
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const fs = require("fs"); // file system

//add to fav_list
router.post(
    "/add",
    body("user_id")
      .not().isEmpty()
      .withMessage("User id is required"),
    body("prod_id")
      .not().isEmpty()
      .withMessage("Product id is required"),
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
        };
  
        // 3- INSERT FAVORITE INTO DB
        const query = util.promisify(connection.query).bind(connection);
        await query("INSERT INTO fav_list SET ?", favorite);
        res.status(200).json({
          message: "Favorite created successfully!",
        });
      } catch (err) {
        res.status(500).json(err);
      }
    }
);





// get the fav_list for this user 
router.get('/get/:userId',
 async (req, res) => {
    try {
      const query = util.promisify(connection.query).bind(connection);
      const fav_list = await query('SELECT * FROM fav_list WHERE user_id = ?', [req.params.userId]);

      if (fav_list.length === 0) {
        return res.status(404).json({ msg: 'fav list is empty for this user' });
      }

      res.status(200).json({
        fav_list: fav_list,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    });


    //Delete all the fav list for specific user
    router.delete('/delete/:id', async (req, res) => {
        const userId = req.params.id;
      
        const sql = 'DELETE FROM fav_list WHERE user_id = ?';
      
        try {
          const query = util.promisify(connection.query).bind(connection);
          const result = await query(sql, [userId]);
          
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'fav_list not found for this user' });
          }
      
          return res.json({ message: 'fav_list deleted successfully' });
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
      });
   


      //remove specific product from the fav list of a specific user 
      router.delete('/remove/:id', async (req, res) => {
        const userId = req.params.id;
        const prodId = req.body.prod_id; 
      
        const sql = 'DELETE FROM fav_list WHERE user_id = ? AND prod_id = ?';
      
        try {
          const query = util.promisify(connection.query).bind(connection);
          const result = await query(sql, [userId, prodId]);
          
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'product in your fav_list not found' });
          }
      
          return res.json({ message: 'product deleted successfully from your fav_list' });
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
      });


module.exports = router;
