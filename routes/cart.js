const express = require("express");
const router = express.Router();
const { handleGetCarts } = require("../controllers/cart");

router.get("/", handleGetCarts);

module.exports = router;
