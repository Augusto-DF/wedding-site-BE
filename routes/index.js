const express = require("express");
const router = express.Router();
const giftListRouter = require("./giftsRoute");

router.use("/", (req, res, next) => {
  console.log("On root");
  next();
});

router.use("/gifts", giftListRouter);
module.exports = router;
