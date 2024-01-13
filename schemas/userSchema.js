const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String },
  // lastname: { type: String },
  // contact: { type: Number, required: true },
  // email: { type: String },
  // password: { type: String },
  // dp: { type: String },
  // address: { type: String },
  // pincode: { type: Number },
});
module.exports = mongoose.model("user", userSchema);
