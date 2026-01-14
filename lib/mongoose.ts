// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

/** * Global is used here to maintain a cached connection across hot reloads 
 * in development. This prevents connections from growing exponentially.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToMongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // We store the promise so that if two components call this 
    // simultaneously, they both wait for the same connection.
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      console.log("New mongodb connection established");
      return m.connection;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Reset promise on error
    throw e;
  }

  return cached.conn;
}