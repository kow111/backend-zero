require("dotenv").config();

const connection = require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const webRoute = require("./routes/web");
const apiRoute = require("./routes/api");

app.use("/", apiRoute);

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
