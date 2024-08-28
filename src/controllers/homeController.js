const User = require("../models/user");

const getAllUsers = async (req, res) => {
  let users = await User.find();
  return res.status(200).json({
    EC: 0,
    DT: users,
  });
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(email, name, city);
  let result = await User.create({
    email,
    name,
    city,
  });

  return res.status(200).json({
    EC: 0,
    DT: result,
  });
};

const putUpdateUser = async (req, res) => {
  const id = req.params.id;
  const { email, name, city } = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, { name, email, city });
  return res.status(200).json({
    EC: 0,
    DT: updatedUser,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  let result = await User.findByIdAndDelete(id);
  return res.status(200).json({
    EC: 0,
    DT: result,
  });
};

const getABC = (req, res) => {
  res.send("Hello abc");
};

module.exports = {
  getAllUsers,
  getABC,
  postCreateUser,
  putUpdateUser,
  deleteUser,
};
