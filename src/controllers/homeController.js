const connection = require("../config/database");
const User = require("../models/user");

const getHomePage = async (req, res) => {
  let users = await User.find();
  res.send(users);
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(email, name, city);
  await User.create({
    email,
    name,
    city,
  });
  res.send("create user completed");
};

const putUpdateUser = async (req, res) => {
  const id = req.params.id;
  const { email, name, city } = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, { name, email, city });
  res.send(updatedUser);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.send("delete success");
};

const getABC = (req, res) => {
  res.send("Hello abc");
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  putUpdateUser,
  deleteUser,
};
