const express = require("express");
const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  return res.status(200).json({ name: req.query.name, age: req.query.age });
});

routerAPI.get("/:name/:age", (req, res) => {
  return res.status(200).json({ name: req.params.name, age: req.params.age });
});

module.exports = routerAPI;
