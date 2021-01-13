import Links from "../components/navigation/Links";
import React from "react";
import Modal from "react-modal";
import UpdateEmailForm from "./UpdateEmailForm";
//import "./components/settings/Settings";
//import ReactDOM from 'react-dom';

Modal.setAppElement('#root');

export default function Settings() {
  return (
    <>
     <UpdateEmailForm />
    </>
  );
}
