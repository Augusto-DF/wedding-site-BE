const express = require("express");
const router = express.Router();
const giftsRouter = require("./giftsRoute");
const gifterRouter = require("./gifterRoute");
const guestsRouter = require("./guestsRoute");
const initDb = require("./populateRoute");

router.use("/", (req, res, next) => {
  console.log("On root");
  next();
});

router.use("/gifts", giftsRouter);
router.use("/gifter", gifterRouter);
router.use("/guests", guestsRouter);
router.use("/db", initDb);
module.exports = router;
