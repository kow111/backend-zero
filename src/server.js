require("dotenv").config();

const connection = require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const webRoute = require("./routes/web");
const apiRoute = require("./routes/api");
const mongoose = require("mongoose");

app.use("/", apiRoute);

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);
const silence = new Kitten({ name: "Silence" });
silence.save();
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
