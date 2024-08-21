const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/abc", (req, res) => {
  res.send("Hello abc");
});

module.exports = router;
