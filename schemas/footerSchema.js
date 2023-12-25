const mongoose = require("mongoose");

const foooter = mongoose.Schema({
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
});
