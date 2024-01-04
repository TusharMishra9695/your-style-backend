const Login = require("../schemas/signupSchema");
const { setUser } = require("../service/auth");

async function handlePostLogin(req, resp) {
  const { username, password } = req.body;
  try {
    let user = await Login.findOne({
      username,
      password,
    });
    if (user) {
      const token = setUser(user);
      resp.send({ message: "User Login Successfully !", token: token });
    } else {
      resp.send({ message: "Username/Password not correct !" });
    }
  } catch (e) {
    resp.send({ message: "Username/Password not correct !" });
  }
}

module.exports = {
  handlePostLogin,
};
