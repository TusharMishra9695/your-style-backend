const express = require("express");
const router = express.Router();
const Header = require("../schemas/headerSchema");

router.get("/", async (req, resp) => {
  let headerData = await Header.find();
  resp.send(headerData);
});

module.exports = router;
