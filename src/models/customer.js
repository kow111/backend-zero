const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You should enter a name"] },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    image: String,
    description: String,
  },
  { timestamps: true }
);

customerSchema.plugin(mongooseDelete, { overrideMethods: "all" });
const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
