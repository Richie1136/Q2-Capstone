import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Library.css";
import Links from "../navigation/Links";
const URL = "http://localhost:4000/library"; //need to get api set up or something to get data from
const Table = () => {
  const [dinos, setDinos] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(URL);
    setDinos(response.data);
  };
  const removeData = (id) => {
    axios.delete(`${URL}/dinos/${id}`).then((res) => {
      const del = dinos.filter((dino) => id !== dino._id);
      setDinos(del);
      console.log("res", res);
    });
  };
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
      dinos &&
      dinos.map(
        ({
          id,
          creatureType,
          level,
          status,
          name,
          gender,
          health,
          stamina,
          oxygen,
          food,
          weight,
          meleeDamage,
          movementSpeed,
          torpidity,
          imprinting,
        }) => {
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
              <td className="remove">
                <button id="button" onClick={() => removeData(id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        },
      )
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
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};
export default Table;
