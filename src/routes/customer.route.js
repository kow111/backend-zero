const express = require("express");
const { postCreateCustomer } = require("../controllers/customer.controller");
const routerAPI = express.Router();

routerAPI.post("/", postCreateCustomer);

module.exports = routerAPI;
