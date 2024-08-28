const express = require("express");
const {
  getHomePage,
  postCreateUser,
  putUpdateUser,
  deleteUser,
} = require("../controllers/homeController");
const routerAPI = express.Router();

routerAPI.get("/", getHomePage);
routerAPI.post("/", postCreateUser);
routerAPI.put("/:id", putUpdateUser);
routerAPI.delete("/:id", deleteUser);

module.exports = routerAPI;
