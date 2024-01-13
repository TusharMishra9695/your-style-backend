const Signup = require("../schemas/signupSchema");

async function handlePostSignup(req, resp) {
  const { contact, password } = req.body;
  try {
    let finduser = await Signup.findOne({
      contact,
    });
    if (finduser) {
      resp.send({ message: "Mobile Number already registered" });
    } else {
      let data = new Signup(req.body);
      await data.save();
      resp.send({ message: "Sign Up Successfully !" });
    }
  } catch (e) {
    resp.send("some network issue");
  }
}

module.exports = {
  handlePostSignup,
};
