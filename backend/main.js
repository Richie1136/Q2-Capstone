import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Dino } from "./dinoSchema";
import dotenv from "dotenv";
import { uploadTolibrary } from "../frontend/src/utils/api";

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

//displaying message correctly
app.get("/", (req, res) => {
  res.send("homepage");
});

//displaying specified message correctly
app.get("/user", (req, res) => {
  res.send("profile info page");
});

//not working properly
app.get("/library", async (req, res) => {
  console.log(req.body);
  // try {
  //   const datas = await uploadTolibrary();
  //   const dinoData = data.map((data) => ({ src: `/library/${data}` }));
  //   res.json(dinoData);
  // } catch (err) {
  //   res.status(404).send("unable to save");
  // }
});
//  try {
//     const files = await getUploadedFiles();
//     const fileData = files.map((file) => ({ src: `/uploads/${file}` }));
//     res.json(fileData);
//   } catch (err) {
//     res.status(500).json({ msg: err.msg });
//   }
// });

app.post("/library", async (req, res) => {
  const myData = new Dino(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

//not displaying for any page that isn't already specified
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Sorry, Page not found!",
  });
});

app.listen(4000, () => {
  console.log("Express server is now running on port 4000");
});

export {};
