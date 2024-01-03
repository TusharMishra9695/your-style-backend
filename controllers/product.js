const Product = require("../schemas/productSchema");

async function handleGetProducts(req, resp) {
  let productData = await Product.find();
  resp.send(productData);
}

module.exports = {
  handleGetProducts,
};
