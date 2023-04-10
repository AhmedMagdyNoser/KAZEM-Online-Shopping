const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "kazem",
    port:3306
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Datebase Connected");
});

module.exports = connection; 