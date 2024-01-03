const express = require("express");
const router = express.Router();
const { handlePostSignup } = require("../controllers/signup");

router.post("/", handlePostSignup);

module.exports = router;
