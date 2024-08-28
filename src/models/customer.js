const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    image: String,
    description: String,
  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
