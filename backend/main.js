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
<<<<<<< HEAD
<<<<<<< HEAD
const uri = "mongodb+srv://Kenzie8:Kenzie2021@ark-stat-app01.tp6cj.mongodb.net/test";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
=======
const uri = "mongodb+srv://Ark_Kapstone8:ArkApp2021@dino-data.2cygx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
>>>>>>> efdbc78... mongoDB setup in backend
=======
const uri = "mongodb+srv://Kenzie8:Kenzie2021@ark-stat-app01.tp6cj.mongodb.net/test";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
>>>>>>> 3f16834... updated uri for main.js

app.get("/", (req, res) => {
  res.send("homepage");
});
app.get("/user", (req, res) => {
  res.send("profile info page");
});
// app.delete("/delete/:user", (req, res) => {
//   const { username } = req.params;
//   db.collection("user").findOneAndDelete({ username: username }, (err, result) => {
//     if (err) return res.send(500, err);
//     console.log("got deleted");
//     res.redirect("/");
//   });
// });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
app.all("./dinos");
app.get("./dinos/:id");

=======
// res.status(200).json("This is working");
>>>>>>> efdbc78... mongoDB setup in backend
=======
>>>>>>> 3f16834... updated uri for main.js
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

app.post("/library", (req, res) => {
<<<<<<< HEAD
  const dino = req.body;
  dinosJSON.push(dino);
  res.status(201).send("ok!");
>>>>>>> a994305... Working on API and navbar
=======
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
>>>>>>> efdbc78... mongoDB setup in backend
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
