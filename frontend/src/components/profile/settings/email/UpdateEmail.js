import React from "react";
import UseEmailUpdate from "./UseEmailUpdate";
import ValidateEmailInfo from "./ValidateEmailInfo";

const UpdateEmail = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseEmailUpdate(submitForm, ValidateEmailInfo);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>Change Your Email Address:</h1>
        <div className="form-inputs">
          <label className="form-label">Enter Your Current Email Address:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Your Current Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Enter Your New Email Address:</label>
          <input
            className="form-input"
            type="email"
            name="email2"
            placeholder="Confirm Your New Email Address"
            value={values.email2}
            onChange={handleChange}
          />
          {errors.email2 && <p>{errors.email2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default UpdateEmail;
