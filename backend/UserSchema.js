import mongoose from "mongoose";
import { dinoSchema } from "./dinoSchema";

const userSchema = new mongoose.Schema({
  email: String,
  dinos: dinoSchema,
  id: String,
  name: String,
  tribeName: String,
});

export const userModel = mongoose.model("User", userSchema);
