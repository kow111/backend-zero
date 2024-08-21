require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const webRoute = require("./routes/web");

app.use("/", webRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
