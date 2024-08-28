const express = require("express");
const {
  getAllUsers,
  postCreateUser,
  putUpdateUser,
  deleteUser,
} = require("../controllers/homeController");
const routerAPI = express.Router();

routerAPI.get("/", getAllUsers);
routerAPI.post("/", postCreateUser);
routerAPI.put("/:id", putUpdateUser);
routerAPI.delete("/:id", deleteUser);

module.exports = routerAPI;
