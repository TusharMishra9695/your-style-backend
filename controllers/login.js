const Login = require("../schemas/signupSchema");
const Signup = require("../schemas/signupSchema");
const { setUser } = require("../service/auth");

async function handlePostLogin(req, resp) {
  const { contact, password } = req.body;
  try {
    let user = await Login.findOne({
      contact,
      password,
    });
    if (user) {
      const token = setUser(user);
      const userData = await Signup.find({ contact: contact });
      resp.send({
        message: "User Login Successfully !",
        token: token,
        userData,
      });
    } else {
      resp.send({ message: "Mobile Number/Password not correct !" });
    }
  } catch (e) {
    resp.send({ message: "Mobile Number/Password not correct !" });
  }
}

module.exports = {
  handlePostLogin,
};
