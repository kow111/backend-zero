const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users u", function (err, results) {
    console.log(results);
    users = results;
    console.log("user: ", users);
    res.send(JSON.stringify(users));
  });
};

const getABC = (req, res) => {
  res.send("Hello abc");
};

module.exports = {
  getHomePage,
  getABC,
};
