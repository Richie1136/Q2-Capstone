import React, { useState } from "react";
import Modal from "react-modal";
import "./components/dinocard/DinoCard";

Modal.setAppElement("#root");

function DinoCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img src={props.img} onClick={() => setModalIsOpen(true)} />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Dino Library</h2>
        <p>Welcome to default ark library</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default DinoCard;
