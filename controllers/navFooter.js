const NavFooter = require("../schemas/NavFooterSchema");

async function handleGetNavFooter(req, res) {
  try {
    let navFooterData = await NavFooter.find();
    res.send(navFooterData);
  } catch (error) {
    console.log(error, "error");
  }
}
module.exports = {
  handleGetNavFooter,
};
