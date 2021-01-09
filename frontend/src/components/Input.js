import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

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
    <CardDeck>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="ui form">
            <div className="field">
              <Card.Title>Enter stats</Card.Title>
              <br></br>
              <Card.Title> Health</Card.Title>
              <input type="number" require min="1" value={health} pattern onChange={(e) => setHealth(e.target.value)} />
              <Card.Title>Stamina</Card.Title>
              <input type="number" require min="1" value={stamina} onChange={(e) => setStamina(e.target.value)} />

              <Card.Title>Oxygen</Card.Title>
              <input type="number" require min="1" value={oxygen} onChange={(e) => setOxygen(e.target.value)} />

              <Card.Title>Food</Card.Title>
              <input type="number" require min="1" value={food} onChange={(e) => setFood(e.target.value)} />

              <Card.Title>Weight</Card.Title>
              <input type="number" require min="1" value={weight} onChange={(e) => setWeight(e.target.value)} />

              <Card.Title>Melee Damage</Card.Title>
              <input
                type="number"
                require
                min="1"
                value={meleeDamage}
                onChange={(e) => setMeleeDamage(e.target.value)}
              />

              <Card.Title>Movement Speed</Card.Title>
              <input
                type="number"
                require
                min="1"
                value={movementSpeed}
                onChange={(e) => setMovementSpeed(e.target.value)}
              />

              <Card.Title>Torpidity</Card.Title>
              <input type="number" require min="1" value={torpidity} onChange={(e) => setTorpidity(e.target.value)} />

              <Card.Title>Imprinting</Card.Title>
              <input
                type="number"
                require
                min="1"
                value={imprinting}
                onChange={(e) => setImpriniting(e.target.value)}
              />
              <br></br>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </Card>
    </CardDeck>
  );
};

export default Input;
