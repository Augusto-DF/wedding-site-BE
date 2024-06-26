const express = require("express");
const router = express.Router();
const giftsRouter = require("./giftsRoute");
const guestsRouter = require("./guestsRoute");

router.use("/", (req, res, next) => {
  console.log("On root");
  next();
});

router.use("/gifts", giftsRouter);
router.use("/guests", guestsRouter);
module.exports = router;
