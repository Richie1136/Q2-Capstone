import url from "url";
import {MongoClient} from "mongodb";

let cachedDb = null;

// const uri = process.env.MONGO_DB_URL
// "mongodb+srv://Kenzie8:Kenzie2021@ark-stat-app01.tp6cj.mongodb.net/test";

export default async function connectToDatabase( {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true } );
  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}