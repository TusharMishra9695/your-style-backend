const mongoose = require("mongoose");

const productListingSchema = mongoose.Schema({
  category: { type: String, required: true },
  instock: { type: Boolean },
  wishlisted: { type: Boolean },
  sponsered: { type: Boolean },
  onsale: { type: Boolean },
  bestseller: { type: Boolean },
  max_discounted: { type: Boolean }, // new
  assured: { type: Boolean },
  seller_detail: {
    seller_name: { type: String },
    seller_rating: { type: Number },
  },
  prod_image: [
    {
      img_link: { type: String, required: true },
    },
  ],
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, requied: true },
  discounted_price: { type: Number, required: true },
  color: { type: String, required: true },
  features: { type: [String], required: true },
  material: { type: String, required: true },
  shape: { type: String, required: true },
  dimensions: { type: String, required: true },
  pieces_per_packet: { type: Number, required: true },
  more_buy_more_save: [
    {
      packets: { type: Number, required: true },
      packet_discounted_price: { type: Number, required: true },
    },
  ],
  sizes: { type: String, required: true },
  rating: { type: Number, required: true },
});
module.exports = mongoose.model("product_list", productListingSchema);
