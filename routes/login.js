const express = require("express");
const router = express.Router();
const Login = require("../schemas/loginSchema");

router.post("/", async (req, resp) => {
  let data = new Login(req.body);
  const result = await data.save();
  resp.send(result);
});

module.exports = router;
