import express, { urlencoded } from "express";
import cors from "cors";
import "./utils";
import bodyParser from "body-parser";
import adaptRequest from "./helpers/adapt-request"

const app = express()
app.use(bodyParser.json())

app.all("./dinos", dinoController)
app.get("./dinos/:id", dinoController)

function dinoController (req, res) => {

}



export {};
