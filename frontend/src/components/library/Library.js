import React, { useState, useEffect } from "react";
import { getDinos } from "../../utils/api";
import "./Library.css";
import Links from "../navigation/Links";
import { useSelector } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
const URL = "http://localhost:4000/library";

const Table = () => {
  const [dinos, setDinos] = useState([]);
  const yourID = useSelector((state) => state.id);
  useEffect(() => {
    setDinos = (getDinos(yourID));
  }, []);
  const renderHeader = () => {
    let headerElement = [
      "Ark id",
      "Type",
      "Level",
      "Status",
      "name",
      "gender",
      "health",
      "stamina",
      "oxygen",
      "food",
      "weight",
      "melee",
      "speed",
      "torpor",
      "imprint",
      "remove",
    ];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const renderBody = () => {
    return (
        (
          // {dinos ? JSON.stringify(dinos) : null}
          ) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{creatureType}</td>
              <td>{level}</td>
              <td>{status}</td>
              <td>{name}</td>
              <td>{gender}</td>
              <td>{health}</td>
              <td>{stamina}</td>
              <td>{oxygen}</td>
              <td>{food}</td>
              <td>{weight}</td>
              <td>{meleeDamage}</td>
              <td>{movementSpeed}</td>
              <td>{torpidity}</td>
              <td>{imprinting}</td>
            </tr>
          );
        },
      
    );
  };
  return (
    <>
      <Links />
      <h1 id="title">Dino Library</h1>
      <table id="dino">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </>
  );
};
export default Table;
