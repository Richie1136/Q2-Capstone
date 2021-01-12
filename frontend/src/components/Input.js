import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Links from "../components/navigation/Links";
=======
>>>>>>> 44fa149... added loading animation
=======
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
>>>>>>> 8c587da... fixed input.js file and added gif to sources.md

const Input = () => {
  // const [stats, setStats] = useState("");
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
<<<<<<< HEAD

  return (
    <>
      <Links />
      <CardDeck>
        <Card>
          <form onSubmit={handleSubmit}>
            <div className="ui-form">
              <div className="field">
                <br></br>
                <Card.Title>
                  <b>Enter stats</b>
                </Card.Title>
                <br></br>
                <Card.Title> Health</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={health}
                  onChange={(e) => setHealth(e.target.value)}
                />
                <Card.Title>Stamina</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={stamina}
                  onChange={(e) => setStamina(e.target.value)}
                />

                <Card.Title>Oxygen</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={oxygen}
                  onChange={(e) => setOxygen(e.target.value)}
                />

                <Card.Title>Food</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                />

                <Card.Title>Weight</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />

                <Card.Title>Melee Damage</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={meleeDamage}
                  onChange={(e) => setMeleeDamage(e.target.value)}
                />

                <Card.Title>Movement Speed</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={movementSpeed}
                  onChange={(e) => setMovementSpeed(e.target.value)}
                />

                <Card.Title>Torpidity</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={torpidity}
                  onChange={(e) => setTorpidity(e.target.value)}
                />

                <Card.Title>Imprinting</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  require
                  min="1"
                  value={imprinting}
                  onChange={(e) => setImpriniting(e.target.value)}
                />
                <br></br>
                <br></br>
                <button className="input-button" type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Card>
      </CardDeck>
    </>
=======

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <div className="ui form">
        <div className="field">
          <label>Enter stats</label>
          <br />
          <label> Health</label>
          <input type="number" require min="1" value={health} pattern onChange={(e) => setHealth(e.target.value)} />
          <br />
          <label>Stamina</label>
          <input type="number" require min="1" value={stamina} onChange={(e) => setStamina(e.target.value)} />
          <br />
          <label>Oxygen</label>
          <input type="number" require min="1" value={oxygen} onChange={(e) => setOxygen(e.target.value)} />
          <br />
          <label>Food</label>
          <input type="number" require min="1" value={food} onChange={(e) => setFood(e.target.value)} />
          <br />
          <label>Weight</label>
          <input type="number" require min="1" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <br />
          <label>Melee Damage</label>
          <input type="number" require min="1" value={meleeDamage} onChange={(e) => setMeleeDamage(e.target.value)} />
          <br />
          <label>Movement Speed</label>
          <input
            type="number"
            require
            min="1"
            value={movementSpeed}
            onChange={(e) => setMovementSpeed(e.target.value)}
          />
          <br />
          <label>Torpidity</label>
          <input type="number" require min="1" value={torpidity} onChange={(e) => setTorpidity(e.target.value)} />
          <br />
          <label>Imprinting</label>
          <input type="number" require min="1" value={imprinting} onChange={(e) => setImpriniting(e.target.value)} />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
>>>>>>> 44fa149... added loading animation
=======
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
>>>>>>> 8c587da... fixed input.js file and added gif to sources.md
  );
};

export default Input;
