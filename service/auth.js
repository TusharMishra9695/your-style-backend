const jwt = require("jsonwebtoken");

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}
function verifyUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.MONGODB_SECRET);
  } catch (error) {
    return null;
  }
}
module.exports = {
  setUser,
};
