const router = require("express").Router();
const connection = require("../db_connection");
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');

router.post('/create',admin, (req, res) => {
    res.status(200).json({
        message:"product created", 
    })
})


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
