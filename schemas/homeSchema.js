const mongoose = require("mongoose");
const homeSchema = mongoose.Schema({
  // nav: {
  //   brand_logo: { type: [String] },
  //   pages_name: { type: [String] },
  // },
  top_sec: {
    main_quote: { type: String },
    offer_quote: { type: String },
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
  footer: {
    left_sec: {
      brand_image: { type: String },
      quote: { type: String },
    },
    mid_sec: {
      her: {
        heading: { type: String },
        links: { type: [String] },
      },
      him: {
        heading: { type: String },
        links: { type: [String] },
      },
    },
    rgt_sec: {
      subs: { type: String },
    },
  },
});
module.exports = mongoose.model("header", homeSchema);
