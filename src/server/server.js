import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";
import { authenticationRoute } from "./authenticate";
import "./initialize-db";

const port = 8888;
const app = express();

app.listen(port, console.log("Server listening on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
authenticationRoute(app);

export const addNewTask = async (task) => {
  const db = await connectDB();
  const collection = db.collection(`tasks`);
  await collection.insertOne(task);
};

app.post("/task/new", async (req, res) => {
  const { task } = req.body;
  await addNewTask(task);
  res.status(200).send();
});

export const updateTask = async (task) => {
  let { id, group, isComplete, name } = task;
  let db = await connectDB();
  let collection = db.collection(`tasks`);

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};

app.post("/task/update", async (req, res) => {
  const { task } = req.body;
  await updateTask(task);
  res.status(200).send();
});
