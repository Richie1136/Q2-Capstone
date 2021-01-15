import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  tribeName: String,
  photo: Image,
  email: String,
});

export const userModel = mongoose.model("User", userSchema);
