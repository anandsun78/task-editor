const { defaultState } = require("./defaultState");
import { connectDB } from "./connect-db";

export async function initializeDB() {
  let db = await connectDB();
  const user = await db.collection(`users`).findOne({ id: "U1" });
  if (!user) {
    for (let collectionName in defaultState) {
      const response = await db
        .collection(collectionName)
        .insertMany(defaultState[collectionName]);
    }
  }
}

initializeDB();
