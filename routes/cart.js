const express = require("express");
const router = express.Router();
const Cart = require("../schemas/cartSchema");

router.get("/", async (req, resp) => {
  let cartData = await Cart.find();
  resp.send(cartData);
});

module.exports = router;
