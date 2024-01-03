const express = require("express");
const router = express.Router();
const { handleGetProductDetail } = require("../controllers/prodetail");

router.get("/", handleGetProductDetail);

module.exports = router;
