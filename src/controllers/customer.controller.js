const { uploadSingle } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
} = require("../services/customer.service");

const postCreateCustomer = async (req, res) => {
  try {
    let fileName = "";
    if (!req.files || Object.keys(req.files).length === 0) {
    } else {
      let rs = await uploadSingle(req.files.image);
      fileName = rs.link;
    }
    const { name, address, phone, email, description } = req.body;
    let data = {
      name,
      address,
      phone,
      email,
      description,
      image: fileName,
    };

    let rs = await createCustomerService(data);
    return res.status(200).json({
      EC: 0,
      DT: rs,
      EM: "Success",
    });
  } catch (e) {
    return res.status(400).json({
      EC: -1,
      DT: null,
      EM: e.message,
    });
  }
};

const postCreateArrayCustomer = async (req, res) => {
  try {
    let arrayCustomer = req.body.customers;
    let rs = await createArrayCustomerService(arrayCustomer);
    return res.status(200).json({
      EC: 0,
      DT: rs,
      EM: "Success",
    });
  } catch (e) {
    return res.status(400).json({
      EC: -1,
      DT: null,
      EM: e.message,
    });
  }
};

module.exports = {
  postCreateCustomer,
  postCreateArrayCustomer,
};
