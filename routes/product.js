const express = require("express");
const router = express.Router();
const Product = require("../schemas/productSchema");

router.get("/", async (req, resp) => {
  let productData = await Product.find();
  resp.send(productData);
});

module.exports = router;
