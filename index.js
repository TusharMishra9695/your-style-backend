// const productSchema = new mongoose.Schema({
//   name: String,
//   password: String,
// });

// const saveInDB = async () => {
//   const User = mongoose.model("signup", productSchema);
//   let data = new User({
//     name: "xyz02",
//     password: "xyz@1234",
//   });
//   //
//   const result = await data.save();
//   console.log(result);
// };

// saveInDB();
const express = require("express");
const app = express();
require("./config");
const Header = require("./schemas/headerSchema");
app.use(express.json());

app.post("/home", async (req, resp) => {
  let data = new Header(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/home", async (req, resp) => {
  let data = await Header.find();
  resp.send(data);
  console.log(data, "header");
});

app.listen(5000);
