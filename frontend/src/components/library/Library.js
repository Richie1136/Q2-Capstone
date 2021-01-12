import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Library.css";
<<<<<<< HEAD
import Links from "../navigation/Links";
=======
>>>>>>> 0f015bd... set up Library table and styling

const URL = ""; //need to get api set up or something to get data from
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
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = dinos.filter((dino) => id !== dino.id);
      setDinos(del);
    });
  };
  const renderHeader = () => {
    let headerElement = [
      "Ark id",
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
      dinos.map(({ id, name, gender, health, stamina, oxygen, food, weight, melee, speed, torpor, imprint }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{health}</td>
            <td>{stamina}</td>
            <td>{oxygen}</td>
            <td>{food}</td>
            <td>{weight}</td>
            <td>{melee}</td>
            <td>{speed}</td>
            <td>{torpor}</td>
            <td>{imprint}</td>
            <td className="remove">
              <button className="button" onClick={() => removeData(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };
  return (
    <>
<<<<<<< HEAD
      <Links />
=======
>>>>>>> 0f015bd... set up Library table and styling
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
