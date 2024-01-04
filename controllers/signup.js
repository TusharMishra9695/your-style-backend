const Signup = require("../schemas/signupSchema");

async function handlePostSignup(req, resp) {
  const { username, email } = req.body;
  try {
    let finduser = await Signup.findOne({
      username,
      email,
    });
    if (finduser) {
      resp.send({ message: "Username & Email already taken" });
    } else {
      let data = new Signup(req.body);
      const result = await data.save();
      resp.send({ result: result, message: "Sign Up Successfully !" });
    }
  } catch (e) {
    const message = `${e.keyValue.username ? e.keyValue.username : ""}${
      e.keyValue.email ? e.keyValue.email : ""
    } already taken`;
    resp.send({ message: message });
  }
}

module.exports = {
  handlePostSignup,
};
