require("dotenv").config();

const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const webRoute = require("./routes/web");

app.use("/", webRoute);

//test conn
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

connection.query("SELECT * FROM Users u", function (err, results) {
  console.log(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
