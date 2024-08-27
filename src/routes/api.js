const express = require("express");
const { getHomePage } = require("../controllers/homeController");
const routerAPI = express.Router();

routerAPI.get("/", getHomePage);

module.exports = routerAPI;
