const { defaultState } = require("./defaultState");
import { connectDB } from "./connect-db";

export async function initializeDB() {
  let db = await connectDB();

  for (let collectionName in defaultState) {
    const response = await db
      .collection(collectionName)
      .insertMany(defaultState[collectionName]);
  }

  client.close();
}

initializeDB();
