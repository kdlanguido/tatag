import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb+srv://atlasUser:vXZn9UumkM6rTNCg@cluster0.yeukxf1.mongodb.net/titanarms?retryWrites=true&w=majority&appName=Cluster0";

const mongoClient = new MongoClient(uri);
await mongoClient.connect();
export const mongoDb = mongoClient.db();
