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

const getAllCustomerService = async () => {
  try {
    let rs = await Customer.find();
    return rs;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deleteCustomerService = async (id) => {
  try {
    let rs = await Customer.deleteById(id);
    return rs;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  deleteCustomerService,
};
