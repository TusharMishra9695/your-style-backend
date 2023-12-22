const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database_name = "your-style";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database_name);
  return db.collection("header");
}
module.exports = dbConnect;
