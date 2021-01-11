import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://Ark_Kapstone8:ArkApp2021@dino-data.2cygx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("homepage");
});
app.get("/user", (req, res) => {
  res.send("profile info page");
});

// res.status(200).json("This is working");
app.get("/library", (req, res) => {
  client.connect((err) => {
    const collection = client.db("test").collection("dino-data");
    collection.find().toArray((err, documents) => {
      if (err) {
        throw err;
      }
      res.send(documents);
    });
    client.close();
  });
});

app.post("/library", (req, res) => {
  client.connect((err) => {
    const collection = client.db("test").collection("dino-data");
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.insertedId);
    });
    client.close();
  });
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
