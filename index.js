const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./mongodb");
require("./config");
const Header = require("./schemas/headerSchema");
const Footer = require("./schemas/footerSchema");
const Product = require("./schemas/productSchema");
const ProductDetail = require("./schemas/prodetailSchema");
const Cart = require("./schemas/cartSchema");
app.use(express.json());

// app.post("/home", async (req, resp) => {
//   let data = new Header(req.body);
//   const result = await data.save();
//   resp.send(result);
// });

app.get("/home", async (req, resp) => {
  let headerData = await Header.find();
  resp.send(headerData);
});
// app.get("/footer", async (req, resp) => {
//   let footerData = await Footer.find();
//   resp.send(footerData);
// });
// app.get("/product_detail", async (req, resp) => {
//   let productdetailData = await ProductDetail.find();
//   resp.send(productdetailData);
// });
// app.get("/product", async (req, resp) => {
//   let productData = await Product.find();
//   resp.send(productData);
// });
// app.get("/cart", async (req, resp) => {
//   let cartData = await Cart.find();
//   resp.send(cartData);
// });

app.listen(5000);
