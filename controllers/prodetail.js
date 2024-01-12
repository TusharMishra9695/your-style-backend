const ProductDetail = require("../schemas/productsSchema");

async function handleGetProductDetail(req, resp) {
  try {
    let productDetail = await ProductDetail.find({ _id: req.query._id });
    resp.send(productDetail);
  } catch (error) {
    console.log(error, "error");
  }
}

module.exports = {
  handleGetProductDetail,
};
