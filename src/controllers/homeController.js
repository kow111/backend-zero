const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const getABC = (req, res) => {
  res.send("Hello abc");
};

module.exports = {
  getHomePage,
  getABC,
};
