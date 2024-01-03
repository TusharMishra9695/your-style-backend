const ProductDetail = require("../schemas/prodetailSchema");

async function handleGetProductDetail(req, resp) {
  let productDetail = await ProductDetail.find();
  resp.send(productDetail);
}

module.exports = {
  handleGetProductDetail,
};
