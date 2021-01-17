import express, { response, urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Dino } from "./dinoSchema";
import { userModel } from "./UserSchema";
import { dinoSchema } from "./dinoSchema";
import dotenv from "dotenv";
import mongodb, { Db } from "mongodb";

dotenv.config();

const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { MongoClient } = require("mongodb").MongoClient;

const uri = process.env.DB_CONNECTION;
mongoose.Promise = global.Promise;
const client = mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("WELCOME");
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
  res.send(doc.id);
});

app.get("/user", (req, res) => {
  res.send("profile info page");
});

app.get("/library", async (req, res) => {
  // console.log(userDoc.dinoData);
  const userDoc = await uniqueUser.find({ id: req.body.userID });
  const dinoDoc = await uniqueUser.find({ dinos: req.body.dinoData });

  res.json(await userDoc.find());

  //1. on frontend, our req.send current user id - useSelector-done
  //2. get id out of req.body.userID-done
  //3. find the user doc with that id-done
  //4. get the array of dinos from that doc
  //5. res.send()
  //6. display on frontend in user's library
});

app.post("/library", async (req, res) => {
  const myData = new Dino(req.body.dinoData);
  const userDoc = await userModel.findOne({ id: req.body.userID });
  userDoc.dinos.push(myData);
  userDoc
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
