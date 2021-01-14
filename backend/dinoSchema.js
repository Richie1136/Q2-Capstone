import mongoose from "mongoose";

const dinoSchema = new mongoose.Schema({
  CreatureType: String,
  name: String,
  health: Number,
  stamina: Number,
  oxygen: Number,
  food: Number,
  weight: Number,
  melee: Number,
  speed: Number,
  torpor: Number,
  imprint: Number,
  gender: String,
  status: String,
  server: Number,
  owner: String,
  id: Number,
});

export let Dino = mongoose.model("Dino", dinoSchema);
