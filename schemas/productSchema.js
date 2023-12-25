const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  categories: {
    women: { type: String },
    men: { type: String },
    child: { type: String },
  },
  items: [
    {
      image: { type: String },
      title: { type: String },
      description: { type: String },
      price: { type: Number },
      discounted_price: { type: Number },
      category: { type: String },
      rating: { type: Number, required: true },
    },
  ],
  sorting: {
    low: { type: Number },
    high: { type: Number },
    rating: { type: Number },
    trending: { type: String },
  },
  total_products: { type: Number },
});
