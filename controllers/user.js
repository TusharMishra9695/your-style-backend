const User = require("../schemas/signupSchema");

async function handlePostUser(req, resp) {
  const _id = req.user._id;
  try {
    let result = await User.findByIdAndUpdate(_id, req.body);
    resp.send({ result, message: "User detail registered Successfully !" });
  } catch (e) {
    resp.send("some network issue");
  }
  resp.end();
}

module.exports = {
  handlePostUser,
};
