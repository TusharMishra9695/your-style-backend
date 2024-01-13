const mongoose = require("mongoose");

const filterSchema = mongoose.Schema(
  {
    heading: { type: String, required: true },
    list: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("filter", filterSchema);
