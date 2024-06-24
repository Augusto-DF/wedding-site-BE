const express = require("express");

const router = express.Router();

const giftModel = require("../models/gifts");
const initDB = require("../models/initDB");

router.get("/", (req, res) => {
  try {
    const list = giftModel
      .list()
      .map((item) => ({ ...item, categories: JSON.parse(item.categories) }));

    res.status(200).json({ response: list });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something is wrong" });
  }
});

module.exports = router;
