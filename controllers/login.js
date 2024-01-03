const Login = require("../schemas/loginSchema");

async function handlePostLogin(req, resp) {
  let data = new Login(req.body);
  const result = await data.save();
  resp.send(result);
}

module.exports = {
  handlePostLogin,
};
