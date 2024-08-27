const express = require("express");
const {
  getHomePage,
  postCreateUser,
} = require("../controllers/homeController");
const routerAPI = express.Router();

routerAPI.get("/", getHomePage);
routerAPI.post("/", postCreateUser);

module.exports = routerAPI;
