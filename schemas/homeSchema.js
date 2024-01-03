const mongoose = require("mongoose");
const homeSchema = mongoose.Schema({
  nav: {
    image: { type: String },
    pages: { type: [String] },
    subtotal: { type: Number },
  },
  top_sec: {
    main_quote: { type: String },
    sec_quote: { type: String },
    background: { type: String },
  },
  mid_sec: {
    offers: [
      {
        background: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ],
  },
  bot_sec: {
    background: { type: String },
    quote: { type: String },
    title: { type: String },
    description: { type: String },
    offer_heading: { type: String },
  },
  specility: [
    {
      image: { type: String },
      title: { type: String },
      description: { type: String },
    },
  ],
});
module.exports = mongoose.model("header", homeSchema);
