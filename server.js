const express = require("express");
const db = require("./config/db.js")
const app = express();
const body_parcer = require("body-parser")

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(express.json())
app.use(body_parcer.urlencoded())

app.get("/", (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.render('index', { todos: results });
  });
})

app.post('/add', (req, res) => {
  const { text } = req.body;
  if (!text) return res.redirect('/');
  
});

app.post('/done/:id', (req, res) => {
  const { id } = req.params;
  
});

app.listen(3000, () => {
    console.log("Kjører på port 3000")
})