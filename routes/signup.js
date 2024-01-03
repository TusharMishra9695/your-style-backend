const express = require("express");
const router = express.Router();
const Signup = require("../schemas/signupSchema");

router.post("/", async (req, resp, next) => {
  try {
    let findusername = await Signup.findOne({
      username: req.body.username,
    });
    if (findusername.username) {
      return resp.status(200).send({ message: "Username already taken" });
    }
  } catch (e) {
    let data = new Signup(req.body);
    const result = await data.save();
    resp.send(result, { message: "Sign Up Successfully" });
  }
});

module.exports = router;
