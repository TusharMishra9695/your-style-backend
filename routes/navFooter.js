const express = require("express");
const router = express.Router();
const { handleGetNavFooter } = require("../controllers/navFooter");

router.get("/", handleGetNavFooter);

module.exports = router;
