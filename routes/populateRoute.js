const express = require("express");
const { create, populate } = require("../models/initDB");

const router = express.Router();

router.get("/create", (req, res) => {
  try {
    create();
    res.status(200).json({ message: "DB created" });
  } catch (err) {
    res.status(400).json({ message: "Something is wrong. err:" + err });
  }
});

router.get("/populate", (req, res) => {
  try {
    populate();
    res.status(200).json({ message: "DB populated" });
  } catch (err) {
    res.status(400).json({ message: "Something is wrong. err:" + err });
  }
});

module.exports = router;
