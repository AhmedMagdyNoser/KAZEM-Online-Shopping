// =============== initialize express app ================
const express = require('express');
const app = express();

//============ Globale middleware ==============
app.use(express.json()); //to access json 
app.use(express.urlencoded({ extended: true })); // to access url form encode d
app.use(express.static('upload'));  // to upload pictures in the upload folder on the server 
const cors = require('cors');
app.use(cors());  // allow http requests localhost

// =============== require modules =================
const auth = require('./routes/auth');
const products = require('./routes/products');
const categories = require('./routes/categories');
const users = require('./routes/users');


//=============== run the app ================
app.listen(5000, "localhost", () => {
    console.log("Server is running");
})

//================ app routes endpoints ===================
app.use("/auth",auth);
app.use("/products", products);
app.use("/categories", categories);
app.use('/users', users);








//==================================
