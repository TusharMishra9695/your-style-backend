const Filter = require("../schemas/filterSchema");

async function handlePostFilter(req, resp) {
  try {
    let data = new Filter(req.body);
    let result = await data.save();
    resp.send(result);
  } catch (e) {
    resp.send("some network issue");
  }
}
async function handleGetFilter(req, resp) {
  try {
    let data = await Filter.find();
    resp.send(data);
  } catch (e) {
    resp.send("some network issue");
  }
}

module.exports = {
  handlePostFilter,
  handleGetFilter,
};
