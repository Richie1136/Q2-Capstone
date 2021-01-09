import React, { useState } from "react";

const Input = () => {
  const [stats, setStats] = useState("");
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [food, setFood] = useState(0);
  const [weight, setWeight] = useState(0);
  const [meleeDamage, setMeleeDamage] = useState(0);
  const [movementSpeed, setMovementSpeed] = useState(0);
  const [torpidity, setTorpidity] = useState(0);
  const [imprinting, setImpriniting] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(health);
    console.log(stamina);
    console.log(oxygen);
    console.log(food);
    console.log(weight);
    console.log(meleeDamage);
    console.log(movementSpeed);
    console.log(torpidity);
    console.log(imprinting);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ui form">
        <div className="field">
          <label>Enter stats</label>
          <br />
          <label> Health</label>
          <input type="number" value={health} pattern onChange={(e) => setHealth(e.target.value)} />
          <br />
          <label>Stamina</label>
          <input type="number" value={stamina} onChange={(e) => setStamina(e.target.value)} />
          <br />
          <label>Oxygen</label>
          <input type="number" value={oxygen} onChange={(e) => setOxygen(e.target.value)} />
          <br />
          <label>Food</label>
          <input type="number" value={food} onChange={(e) => setFood(e.target.value)} />
          <br />
          <label>Weight</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <br />
          <label>Melee Damage</label>
          <input type="number" value={meleeDamage} onChange={(e) => setMeleeDamage(e.target.value)} />
          <br />
          <label>Movement Speed</label>
          <input type="number" value={movementSpeed} onChange={(e) => setMovementSpeed(e.target.value)} />
          <br />
          <label>Torpidity</label>
          <input type="number" value={torpidity} onChange={(e) => setTorpidity(e.target.value)} />
          <br />
          <label>Imprinting</label>
          <input type="number" value={imprinting} onChange={(e) => setImpriniting(e.target.value)} />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Input;
