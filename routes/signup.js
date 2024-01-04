const express = require("express");
const router = express.Router();
const { handlePostSignup } = require("../controllers/signup");

router.route("/").post(handlePostSignup);

module.exports = router;
