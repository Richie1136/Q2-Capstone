export const dinoSchema = new mongoose.Schema({
  health: number,
  stamina: number,
  oxygen: number,
  food: number,
  weight: number,
  melee: number,
  speed: number,
  torpor: number,
  imprint: number,
  Gender: String,
  Status: String,
});

let Dino = mongoose.model("Dino", dinoSchema);
