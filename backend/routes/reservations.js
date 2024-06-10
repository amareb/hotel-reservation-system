// routes/reservations.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all reservations
router.get("/", (req, res) => {
  db.query("SELECT * FROM reservations", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new reservation
router.post("/", (req, res) => {
  const { name, date, roomType } = req.body;
  db.query(
    "INSERT INTO reservations (name, date, roomType) VALUES (?, ?, ?)",
    [name, date, roomType],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, name, date, roomType });
    }
  );
});

module.exports = router;
