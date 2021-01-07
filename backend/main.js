import express, { urlencoded } from "express";
import cors from "cors";
import "./utils";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("connected to mongodb");
});

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/user", (req, res) => {
  res.send("profile info page");
});

app.all("./dinos");
app.get("./dinos/:id");

app.get("/dinos", (req, res) => {
  res.status(200).json(dinosJSON);
});

app.post("/dinos", (req, res) => {
  const dino = req.body;
  dinosJSON.push(dino);
  res.status(201).send("ok!");
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Sorry, Page not found!",
  });
});



app.listen(4000, () => {
  console.log("Express server is now running on port 4000");
});

export {};
