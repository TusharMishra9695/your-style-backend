const jwt = require("jsonwebtoken");

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      contact: user.contact,
    },
    process.env.MONGODB_SECRET
  );
}
function verifyUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.MONGODB_SECRET);
  } catch (e) {
    console.log(e, "error");
    return e;
  }
}
module.exports = {
  setUser,
  verifyUser,
};
