const express = require("express");
const routerAPI = express.Router();
const { postUploadFile } = require("../controllers/fileController");

routerAPI.post("/", postUploadFile);

module.exports = routerAPI;
