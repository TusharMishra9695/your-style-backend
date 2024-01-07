const NavFooter = require("../schemas/NavFooterSchema");

async function handleGetNavFooter(req, res) {
  try {
    let navFooterData = await NavFooter.find();
    res.send({ navFooterData, message: "hello here is nav footer data" });
  } catch (error) {
    console.log(error, "error");
  }
}
module.exports = {
  handleGetNavFooter,
};
