const Cart = require("../schemas/cartSchema");

async function handleGetCarts(req, resp) {
  let cartData = await Cart.find();
  resp.send(cartData);
}

module.exports = {
  handleGetCarts,
};
