import mongoose from "mongoose";

const dinoSchema = new mongoose.Schema({
  health: Number,
  stamina: Number,
  oxygen: Number,
  food: Number,
  weight: Number,
  melee: Number,
  speed: Number,
  torpor: Number,
  imprint: Number,
  Gender: String,
  Status: String,
});

export let Dino = mongoose.model("Dino", dinoSchema);
