const express = require("express");
const router = express.Router();

const guestsModel = require("../models/guests");

router.get("/", (req, res) => {
  const guests = guestsModel.list();

  console.log("result", guests);
});

router.post("/create", (req, res) => {
  console.log(req.body);

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
