const express = require("express");

const router = express.Router();

const gifters_giftsModel = require("../models/gifters_gifts");

router.get("/list", (req, res) => {
  try {
    const list = gifters_giftsModel.list();
    res.status(200).json({ response: list });
  } catch (err) {
    res.status(400).json({ message: "Something is wrong: " + err });
  }
});
