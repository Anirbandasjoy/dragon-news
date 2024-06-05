const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newsDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database");
});

// Get all data
app.get("/news", (req, res) => {
  const sql = `SELECT * FROM news`;
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

// Get single data by id
app.get("/news/:id", (req, res) => {
  const sql = `SELECT * FROM news WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(result[0]);
  });
});

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`);
});
