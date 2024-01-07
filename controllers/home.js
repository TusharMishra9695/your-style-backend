const Home = require("../schemas/homeSchema");

async function handleGetHome(req, resp) {
  try {
    let homeData = await Home.find();
    resp.send(homeData);
  } catch (error) {
    console.log(error, "error");
  }
}

module.exports = {
  handleGetHome,
};
