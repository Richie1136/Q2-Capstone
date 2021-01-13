import React from "react";
import Modal from "react-modal";
import UpdateEmailForm from "./UpdateEmailForm";

Modal.setAppElement("#root");

export default function Settings() {
  return (
    <>
      <UpdateEmailForm />
    </>
  );
}
