const express = require("express");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");
const routerAPI = express.Router();

routerAPI.post("/", postCreateCustomer);
routerAPI.post("/many", postCreateArrayCustomer);
routerAPI.get("/", getAllCustomer);
routerAPI.delete("/:id", deleteCustomer);

module.exports = routerAPI;
