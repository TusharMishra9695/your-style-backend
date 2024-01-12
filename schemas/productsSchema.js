const mongoose = require("mongoose");

const productListingSchema = mongoose.Schema(
  {
    queue: { type: [String], required: true },
    sub: { type: String, required: true },
    availability: { type: Boolean, required: true },
    sponsered: { type: Boolean, required: true },
    bestseller: { type: Boolean, required: true },
    assured: { type: Boolean, required: true },
    seller_detail: {
      seller_name: { type: String, required: true },
      seller_rating: { type: Number, required: true },
    },
    img_list: [
      {
        img_link: { type: String, required: true },
      },
    ],
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, requied: true },
    discounted_price: { type: Number, required: true },
    color: { type: String, required: true },
    specail_feature: { type: [String], required: true },
    material: { type: String, required: true },
    shape: { type: String, required: true },
    pieces_per_packet: { type: Number, required: true },
    occassion: { type: String },
    brand: { type: String },
    uses: { type: String },
    pattern: { type: String },
    more_buy_more_save: [
      {
        packets: { type: Number },
        packet_discounted_price: { type: Number },
      },
    ],
    rating: {
      count: { type: Number, required: true },
      avg_rating: { type: Number, required: true },
      reviews: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("product_list", productListingSchema);
