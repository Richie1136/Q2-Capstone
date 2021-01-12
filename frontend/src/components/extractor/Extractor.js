<<<<<<< HEAD
import "./Extractor.css";
import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Links from "../navigation/Links";
import "./dinoNames";
import dinoNames from "./dinoNames";
import Form from "react-bootstrap/Form";

const Input = () => {
  // const [stats, setStat] = useState([]);
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [food, setFood] = useState(0);
  const [weight, setWeight] = useState(0);
  const [meleeDamage, setMeleeDamage] = useState(0);
  const [movementSpeed, setMovementSpeed] = useState(0);
  const [torpidity, setTorpidity] = useState(0);
  const [imprinting, setImpriniting] = useState(0);
  const [name, setName] = useState("");
  const [tribeName, setTribeName] = useState("");
  const [server, setServer] = useState(0);
  const [owner, setOwner] = useState("");
  const [id, setId] = useState(0);

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
    <>
      <Links />
      <div className="extractor-card">
        <CardDeck className="input">
          <Card className="stat-input">
            <form onSubmit={handleSubmit}>
              <div className="ui-form">
                <div className="double-column">
                  <div className="field">
                    <br></br>
                    <Card.Title>
                      <b>Enter stats</b>
                    </Card.Title>
                    <br></br>
                    <Form.Group controlId="formGridCreature">
                      <Form.Label>Creature</Form.Label>  
                      <br />
                      <Form.Control as="select" defaultValue="Choose..." required>
                        <option>Choose...</option>
                        <option>Giganotosaurus</option>
                        <option>Quetzal</option>
                        <option>Stegosaurus</option>
                        <option>Tusoteuthis</option>
                        <option>Yutyrannus</option>
                      </Form.Control>
                    </Form.Group>
                    {" "}
                    <div className="extractor-headline">
                      <span className="stat-header">Stat</span>
                    </div>
                    <div className="healthRow">
                      <Card.Title>Health</Card.Title>  
                      <input
                        className="stat"
                        type="number"
                        require
                        min="1"
                        value={health}
                        pattern
                        onChange={(e) => setHealth(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="staminaRow">
                    <Card.Title>Stamina</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={stamina}
                      onChange={(e) => setStamina(e.target.value)}
                    />
                  </div>
                  <div className="oxygenRow">
                    <Card.Title>Oxygen</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={oxygen}
                      onChange={(e) => setOxygen(e.target.value)}
                    />
                  </div>
                  <div className="foodRow">
                    <Card.Title>Food</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={food}
                      onChange={(e) => setFood(e.target.value)}
                    />
                  </div>
                  <div className="weightRow">
                    <Card.Title>Weight</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="meleeRow">
                    <Card.Title>Melee Damage</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={meleeDamage}
                      onChange={(e) => setMeleeDamage(e.target.value)}
                    />
                  </div>
                  <div className="speedRow">
                    <Card.Title>Movement Speed</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={movementSpeed}
                      onChange={(e) => setMovementSpeed(e.target.value)}
                    />
                  </div>
                  <div className="torporRow">
                    <Card.Title>Torpidity</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={torpidity}
                      onChange={(e) => setTorpidity(e.target.value)}
                    />
                  </div>
                  <div className="imprintRow">
                    <Card.Title>Imprinting</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      require
                      min="1"
                      value={imprinting}
                      onChange={(e) => setImpriniting(e.target.value)}
                    />
                  </div>
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
        <CardDeck className="locker">
          <br />
          lock
        </CardDeck>
        <br />
        <CardDeck className="stat-output">
          <br />
          Breed Value<Card.Title></Card.Title>
        </CardDeck>
        <CardDeck className="input">
          <Card className="stat-input">
            <form onSubmit={handleSubmit}>
              <div className="ui-form">
                <div className="double-column">
                  <div className="field">
                    <br></br>
                    <Card.Title></Card.Title>
                    <br></br>
                    <Form.Group controlId="formGridCreature">
                      <Form.Label>Gender</Form.Label>  
                      <br />
                      <Form.Control as="select" defaultValue="Choose..." required>
                        <option>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Spayed</option>
                        <option>Neutered</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control as="select" defaultValue="Choose..." required>
                        <option>Choose...</option>
                        <option>Available</option>
                        <option>On Timer</option>
                        <option>Cryopod</option>
                        <option>Deceased</option>
                      </Form.Control>
                    </Form.Group>
                    {" "}
                    <div className="extractor-headline">
                      <span className="stat-header">Stat</span>
                    </div>
                    <div className="dinoName">
                      <Card.Title>Name</Card.Title>  
                      <input
                        className="name"
                        type="string"
                        require
                        min="1"
                        value={name}
                        pattern
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="tribeName">
                    <Card.Title>Tribe Name</Card.Title>
                    <input
                      className="tribe"
                      type="string"
                      value={tribeName}
                      onChange={(e) => setTribeName(e.target.value)}
                    />
                  </div>
                  <div className="server">
                    <Card.Title>Server</Card.Title>
                    <input
                      className="server-input"
                      type="number"
                      min="1"
                      value={server}
                      onChange={(e) => setServer(e.target.value)}
                    />
                  </div>
                  <div className="owner">
                    <Card.Title>Owner</Card.Title>
                    <input
                      className="owner-input"
                      type="string"
                      min="1"
                      value={owner}
                      onChange={(e) => setOwner(e.target.value)}
                    />
                  </div>
                  <div className="ark-id">
                    <Card.Title>Ark Id</Card.Title>
                    <input
                      className="ark-id-input"
                      type="number"
                      min="1"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};

export default Input;
=======
import Links from "../navigation/Links";

export default function Extractor() {
  return (
    <>
      <Links />
      <h1>Dino Stat Extractor page-will be hardest to complete. Do last</h1>
    </>
  );
}
>>>>>>> 8a3ecf4... adjusted navigation so everything is at top of page under theme toggler
