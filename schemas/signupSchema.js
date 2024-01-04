const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  //   profile: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true },
});

module.exports = mongoose.model("signup", signupSchema);
