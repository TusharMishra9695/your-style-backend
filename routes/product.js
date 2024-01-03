const express = require("express");
const router = express.Router();
const { handleGetProducts } = require("../controllers/product");

router.get("/", handleGetProducts);

module.exports = router;
