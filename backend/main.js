import express, { urlencoded } from "express";
import cors from "cors";
import "./utils";
import bodyParser from "body-parser";


const app = express()
app.use(bodyParser.json())

app.all("./dinos", dinoController)
app.get("./dinos/:id", dinoController)
app.get("/", (req, res) => {
  res.send("Hello from my cool server");
});
app.get("/dinos", (req, res) => {
  res.status(200).json(dinosJSON)
});

app.post("/dinos", (req, res) => {
  const dino = req.body;
  dinosJSON.push(dino)
  res.status(201).send("ok!")
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Sorry, Page not found!"
  });
});

app.listen(4000, () => {
  console.log("Express server is now running on port 4000")
})

function dinoController(req, res) => {

}



export { };
