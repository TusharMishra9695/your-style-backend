const express = require("express");
const router = express.Router();
const { handlePostFilter, handleGetFilter } = require("../controllers/filter");

router.post("/", handlePostFilter).get("/", handleGetFilter);

module.exports = router;
