const mongoose = require("mongoose");
const NavFooterSchema = mongoose.Schema({
  nav: {
    brand_logo: { type: String },
    pages_name: [
      {
        page_category: { type: String }, // lke men ,women
        category_logo: { type: String },
        sub_categories: [
          // like under 10 years
          {
            name: { type: String },
          },
        ],
      },
    ],
  },
  footer: {
    left_sec: [
      {
        heading: { type: String }, // like help , socail links
        sub_heading: [
          {
            name: { type: String }, // like catgeory , facebook
            link: { type: String },
          },
        ],
      },
    ],
    rgt_sec: {
      address: { type: String },
      email: { type: String },
      number: { type: Number },
    },
  },
});
module.exports = mongoose.model("navfooter", NavFooterSchema);
