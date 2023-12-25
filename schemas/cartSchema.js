const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  total_quantity: { type: Number },
  subtotal: { type: Number },
  after_discount: { type: Number },
  selected_products: [
    {
      image: { type: String },
      title: { type: String },
      price: { type: Number },
      discounted_price: { type: Number },
      quantity: { type: Number },
      subtotal: { type: Number },
    },
  ],
});
module.exports = mongoose.model("cart", cartSchema);
