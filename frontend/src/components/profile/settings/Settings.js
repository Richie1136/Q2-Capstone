import React from "react";
import Modal from "react-modal";
import UpdateEmailForm from "./email/UpdateEmailForm";

Modal.setAppElement("#root");

export default function Settings() {
  return (
    <>
      <UpdateEmailForm />
    </>
  );
}
