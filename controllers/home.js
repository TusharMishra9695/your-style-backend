const Home = require("../schemas/homeSchema");

async function handleGetHome(req, resp) {
  let homeData = await Home.find();
  resp.send(homeData);
}

module.exports = {
  handleGetHome,
};
