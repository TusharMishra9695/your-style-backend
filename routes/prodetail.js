const express = require("express");
const router = express.Router();
const ProductDetail = require("../schemas/prodetailSchema");

router.get("/", async (req, resp) => {
  let productDetail = await ProductDetail.find();
  resp.send(productDetail);
});

module.exports = router;
