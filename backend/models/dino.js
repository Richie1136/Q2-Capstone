import mongoose from "mongoose";
import bcrypt from "bcrypt";

const dinoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  health: {
    type: Number,
    required: true,
  },
  stamina: {
    type: Number,
    required: true,
  },
  oxygen: {
    type: Number,
    required: true,
  },
  food: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  melee: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  torpor: {
    type: Number,
    required: true,
  },
  imprint: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("dino", dinoSchema);
