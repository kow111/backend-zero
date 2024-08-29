const express = require("express");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
} = require("../controllers/customer.controller");
const routerAPI = express.Router();

routerAPI.post("/", postCreateCustomer);
routerAPI.post("/many", postCreateArrayCustomer);

module.exports = routerAPI;
