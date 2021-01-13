import React, { useState } from "react";
// import './Form.css';
import UpdateEmail from "./UpdateEmail";
import EmailUpdateSuccess from "./EmailUpdateSuccess";

const UpdateEmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {/* <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div> */}
        {!isSubmitted ? <UpdateEmail submitForm={submitForm} /> : <EmailUpdateSuccess />}
      </div>
    </>
  );
};

export default UpdateEmailForm;
