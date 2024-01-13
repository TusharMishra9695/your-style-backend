const express = require("express");
const router = express.Router();
const { handlePostUser } = require("../controllers/user");

router.route("/").patch(handlePostUser);

module.exports = router;
