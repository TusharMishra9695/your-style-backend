const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    usertype: { type: String, required: true },
    contact: { type: Number, required: true, unqiue: true },
    password: { type: String, required: true },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    dp: { type: String },
    address: { type: String },
    pincode: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("signup", signupSchema);
