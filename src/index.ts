import express from "express";
import RabitMq from "./services/rabitMq";
import firebase from "./services/firebase";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import template from "./template";
dotenv.config();
const database = firebase.database();
const writeUserData = (id: any, data: any) => {
  database.ref("/" + id).set(data);
};
const PORT = process.env.port || 3000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(template);
});
app.post("/user", (req, res) => {
  RabitMq("codingtest", "send", JSON.stringify(req.body), (value: any) => {
    console.log(value);
  });
  res.send("Received data");
});
app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});
