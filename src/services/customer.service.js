const Customer = require("../models/customer");
const { uploadSingle } = require("../services/fileService");

const createCustomerService = async (customerData) => {
  try {
    let rs = await Customer.create(customerData);
    return rs;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createCustomerService,
};
