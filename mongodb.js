const { MongoClient } = require("mongodb");
const database_name = process.env.MONGODB_NAME;
const client = new MongoClient(process.env.MONGODB_URL);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database_name);
  return db.collection("header");
}
module.exports = dbConnect;
