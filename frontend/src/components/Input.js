import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Links from "../components/navigation/Links";
import { addTolibrary, uploadTolibrary } from "../utils/api";

const Input = () => {
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [food, setFood] = useState(0);
  const [weight, setWeight] = useState(0);
  const [meleeDamage, setMeleeDamage] = useState(0);
  const [movementSpeed, setMovementSpeed] = useState(0);
  const [torpidity, setTorpidity] = useState(0);
  const [imprinting, setImpriniting] = useState(0);
  // const [stats, setStats] = useState([]);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [uploadStatus, setUploadStatus] = useState(null);
  // const [fetchStatusError, setFetchStatusError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let stats = {
      health,
      stamina,
      oxygen,
      food,
      weight,
      meleeDamage,
      movementSpeed,
      torpidity,
      imprinting,
    };
    addTolibrary(stats);
    uploadTolibrary(stats);

    // useEffect(() => {
    //   async function getStats() {
    //     setStats(await fetchStats());
    //   }
    //   getStats();
    // }, []);

    // const submitLibrary = async (event) => {
    //   try {
    //     event.preventDefault();
    //     await uploadTolibrary(stats);
    //     setUploadStatus("Success!");
    //   } catch {
    //     setUploadStatus("Unable to upload Stats");
    //   } finally {
    //     setTimeout(() => {
    //       setUploadStatus(null);
    //     }, 3000);
    //   }
    // };

    // const onSelectFile = (event) => {
    //   setSelectedFile(event.target.files[0]);
    // };
  };

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
                  min="1"
                  value={health}
                  onChange={(e) => setHealth(e.target.value)}
                />
                <Card.Title>Stamina</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={stamina}
                  onChange={(e) => setStamina(e.target.value)}
                />

                <Card.Title>Oxygen</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={oxygen}
                  onChange={(e) => setOxygen(e.target.value)}
                />

                <Card.Title>Food</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                />

                <Card.Title>Weight</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />

                <Card.Title>Melee Damage</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={meleeDamage}
                  onChange={(e) => setMeleeDamage(e.target.value)}
                />

                <Card.Title>Movement Speed</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={movementSpeed}
                  onChange={(e) => setMovementSpeed(e.target.value)}
                />

                <Card.Title>Torpidity</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
                  min="1"
                  value={torpidity}
                  onChange={(e) => setTorpidity(e.target.value)}
                />

                <Card.Title>Imprinting</Card.Title>
                <input
                  className="stat"
                  type="number"
                  pattern="true"
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
  );
};

export default Input;
