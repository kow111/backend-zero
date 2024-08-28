require("dotenv").config();

const connection = require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const apiRoute = require("./routes/api");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/v1/user", apiRoute);

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
