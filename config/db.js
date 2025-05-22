const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.DB_PASS,
    database:"todo_db"
});

db.connect(err => {
    if(err) {
        console.error("Det er ein error ved kopling av databasen: "+ err);
    } else {
        console.log("Koplinga til databasen er vellykka")
    }
    
})

module.exports = db;