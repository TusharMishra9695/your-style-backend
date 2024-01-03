const Footer = require("../schemas/footerSchema");

async function handleGetFooter(req, resp) {
  let footerData = await Footer.find();
  resp.send(footerData);
}

module.exports = {
  handleGetFooter,
};
