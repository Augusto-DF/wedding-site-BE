const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("On root");
  next();
});

module.exports = router;
