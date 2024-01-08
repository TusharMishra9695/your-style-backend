const Product = require("../schemas/productsSchema");

async function handleGetProducts(req, resp) {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skips = (page - 1) * limit;
    let productData = await Product.find(req.query).skip(skips).limit(limit);
    resp.send({ productData });
  } catch (err) {
    console.log(err, "err");
  }
}

module.exports = {
  handleGetProducts,
};
