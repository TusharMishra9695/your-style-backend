const User = require("../schemas/signupSchema");

async function handlePostUser(req, resp) {
  console.log(req.body, "bodty");
  const _id = req.user._id;
  console.log(_id, "user detail");
  try {
    let result = await User.findByIdAndUpdate(_id, req.body);
    resp.send({ result, message: "User detail registered Successfully !" });
  } catch (e) {
    console.log(e, "error");
    resp.send("some network issue");
  }
  resp.end();
}

module.exports = {
  handlePostUser,
};
