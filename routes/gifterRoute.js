const express = require("express");

const router = express.Router();

const gifterModel = require("../models/gifter");

router.get("/list", (req, res) => {
  try {
    const list = gifterModel.list();
    res.status(200).json({ response: list });
  } catch (err) {
    res.status(400).json({ message: "Something is wrong: " + err });
  }
});

module.exports = router;
