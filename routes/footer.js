const express = require("express");
const router = express.Router();
const { handleGetFooter } = require("../controllers/footer");

router.get("/", handleGetFooter);

module.exports = router;
