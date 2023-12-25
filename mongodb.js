const { MongoClient } = require("mongodb");
const database_name = process.env.MONGODB_NAME;
const client = new MongoClient(process.env.MONGODB_URL);

async function dbConnect(name) {
  let result = await client.connect();
  db = result.db(database_name);
  return db.collection(name);
}
module.exports = dbConnect;
