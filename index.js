const express = require("express");
require("dotenv").config();
require("./config");
const app = express();
const homeRouter = require("./routes/home");
const footerRouter = require("./routes/footer");
const cartRouter = require("./routes/cart");
const productRouter = require("./routes/product");
const prodetailRouter = require("./routes/prodetail");
const login = require("./routes/login");
const signup = require("./routes/signup");

app.use("/", homeRouter);
app.use("/home", homeRouter);
app.use("/footer", footerRouter);
app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/product-detail", prodetailRouter);
app.use("/login", login);
app.use("/signup", signup);

app.listen(5000);
