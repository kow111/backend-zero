require("dotenv").config();

const connection = require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const webRoute = require("./routes/web");

app.use("/", webRoute);

connection.query("SELECT * FROM Users u", function (err, results) {
  console.log(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
