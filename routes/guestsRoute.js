const express = require("express");
const router = express.Router();

const guestsModel = require("../models/guests");

router.get("/", (req, res) => {
  try {
    const guests = guestsModel.list();

    res.status(200).json({ guests });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/create", (req, res) => {
  const body = req.body;
  const validate = guestsModel.validateGuest(body);

  if (!validate.error) {
    try {
      guestsModel.create(req.body);
      res.status(201).json({ success: "Guest created" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    res.status(400).json(validate.error);
  }
});

module.exports = router;
