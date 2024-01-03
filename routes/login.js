const express = require("express");
const router = express.Router();
const { handlePostLogin } = require("../controllers/login");

router.post("/", handlePostLogin);

module.exports = router;
