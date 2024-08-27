const connection = require("../config/database");
const User = require("../models/user");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users u", function (err, results) {
    console.log(results);
    users = results;
    console.log("user: ", users);
    res.send(JSON.stringify(users));
  });
};
const postCreateUser = async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(email, name, city);
  await User.create({
    email,
    name,
    city,
  });
};
const getABC = (req, res) => {
  res.send("Hello abc");
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
};
