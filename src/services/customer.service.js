const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    let rs = await Customer.create(customerData);
    return rs;
  } catch (e) {
    throw new Error(e.message);
  }
};

const createArrayCustomerService = async (array) => {
  try {
    let rs = await Customer.insertMany(array);
    return rs;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
};
