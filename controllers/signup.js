const Signup = require("../schemas/signupSchema");

async function handlePostSignup(req, resp) {
  try {
    let findusername = await Signup.findOne({
      username: req.body.username,
    });
    if (findusername.username) {
      return resp.send({ message: "Username already taken" });
    }
  } catch (e) {
    let data = new Signup(req.body);
    const result = await data.save();
    resp.send(result, { message: "Sign Up Successfully" });
  }
}

module.exports = {
  handlePostSignup,
};
