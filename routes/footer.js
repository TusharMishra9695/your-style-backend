const express = require("express");
const router = express.Router();
const Footer = require("../schemas/footerSchema");

router.get("/", async (req, resp) => {
  let footerData = await Footer.find();
  resp.send(footerData);
});

module.exports = router;
