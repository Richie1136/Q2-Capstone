import mongoose from "mongoose";
import { dinoSchema } from "./dinoSchema";
// import {} from "./librarySchema";

const userSchema = new mongoose.Schema({
  library: [dinoSchema],
  name: String,
  tribeName: String,
  email: String,
});

export const userModel = mongoose.model("User", userSchema);
