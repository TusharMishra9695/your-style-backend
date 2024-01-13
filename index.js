const express = require("express");
require("dotenv").config();
require("./config");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const navFooterRouter = require("./routes/navFooter");
const homeRouter = require("./routes/home");
const cartRouter = require("./routes/cart");
const productRouter = require("./routes/product");
const prodetailRouter = require("./routes/prodetail");
const login = require("./routes/login");
const signup = require("./routes/signup");
const user = require("./routes/user");
const filter = require("./routes/filter");
const { restrictToLoggedInUserOnly } = require("./middlewares/auth");

app.use("/nav-footer", navFooterRouter);
app.use("/", homeRouter);
app.use("/home", homeRouter);
app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/product-detail", prodetailRouter);
app.use("/login", login);
app.use("/signup", signup);
app.use("/signup", signup);
app.use("/filters", filter);

app.use("/user", restrictToLoggedInUserOnly, user);
app.listen(5000);
