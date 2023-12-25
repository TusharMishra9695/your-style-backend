const mongoose = require("mongoose");

const prodetailSchema = mongoose.Schema({
  details: {
    image: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    discounted_price: { type: Number },
    category: { type: String },
    rating: { type: Number },
    selected_quantity: { type: Number },
  },
  review: {
    no_of_rate: { type: Number },
    rate: [
      {
        name: { type: String },
        dp: { type: String },
        rating: { type: Number },
        message: { type: String },
        approved: { type: Boolean },
      },
    ],
  },
});
module.exports = mongoose.model("product_detail", prodetailSchema);
