import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dinoSchema from "./dinoSchema";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

//displaying message correcting
app.get("/", (req, res) => {
  res.send("homepage");
});

//displaying specified message correctly
app.get("/user", (req, res) => {
  res.send("profile info page");
});

//not working properly
app.get("/library", (req, res) => {
  client.connect((err) => {
    const collection = client.db("values").collection("dinos");
    collection.find().toArray((err, documents) => {
      if (err) {
        throw err;
      }
      res.send(documents);
    });
    client.close();
  });
});

//unsure if working properly
app.post("/library", (req, res) => {
  client.connect((err) => {
    const collection = client.db("values").collection("dinos");
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.insertedId);
    });
    client.close();
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
