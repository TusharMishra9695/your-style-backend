const ProductDetail = require("../schemas/productsSchema");

async function handleGetProductDetail(req, resp) {
  try {
    let productDetail = await ProductDetail.find({ title: req.query.title });
    resp.send(productDetail);
  } catch (error) {
    console.log(error, "error");
  }
}

module.exports = {
  handleGetProductDetail,
};
