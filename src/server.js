require("dotenv").config();

const connection = require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const userRoute = require("./routes/api");
const fileRoute = require("./routes/file");
const customerRoute = require("./routes/customer.route");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/file", fileRoute);
app.use("/api/v1/customer", customerRoute);

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
