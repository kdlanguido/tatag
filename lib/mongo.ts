import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI || "";
const mongoClient = new MongoClient(uri);
await mongoClient.connect();
export const mongoDb = mongoClient.db();
