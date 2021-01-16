import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Dino } from "./dinoSchema";
import { userModel } from "./UserSchema";
import { dinoSchema } from "./dinoSchema";
import dotenv from "dotenv";
import { libraryStorage } from "../frontend/src/utils/api";
import mongodb, { Db } from "mongodb";

dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { MongoClient } = require("mongodb").MongoClient;

const uri = process.env.DB_CONNECTION;
mongoose.Promise = global.Promise;
const client = mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("homepage");
});

app.post("/signup", (req, res) => {
  const myData = new userModel(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/login/:email", async (req, res) => {
  const doc = await userModel.findOne({ email: req.params.email });
  console.log(doc.id);
  res.send(doc.id);
});

app.get("/user", (req, res) => {
  res.send("profile info page");
});

//3. generate user ID, unique key so library is subjective to user
//4. use user's ID to find user doc
//5. Make new dino to test user library
//subcollection for mongodb?
//6. push dino onto logged in user's library
//7. Get current user's ID (req.userID)
//const doc = await userModel.find({ id: req.params.id });
app.get("/library", async (req, res) => {
  // console.log(await Dino.find());
  res.json(await Dino.find());
});

app.post("/library", async (req, res) => {
  const myData = new Dino(req.body);
  userModel.library
    .push(myData)
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// app.delete("/library/:user", (req, res) => {
//   res.send("DELETE Request Called");
// });

//app.get("/user", async (req, res) => {
//store user's tribe name, username and photo
//userModel is what will be used here
//});

//app.post("/user", async (req, res) => {
//show tribe name, username and photo in profile route
//userModel is what will be used here
//});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Sorry, Page not found!",
  });
});

app.listen(4000, () => {
  console.log("Express server is now running on port 4000");
});
export {};
