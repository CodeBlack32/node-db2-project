const express = require("express");
const db = require("../db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      console.log("GET error", err);
      res.status(500).json({ message: "Failed to retrieve any cars!" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((newCar) => {
      res.status(201).json(newCar);
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to post data" });
    });
});

module.exports = router;
