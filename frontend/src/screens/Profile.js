import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "../components/navigation/Links";

const Profile = ({ onFormSubmit }) => {
  const [files, setFiles] = useState([]);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (files.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [files]);
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   onFormSubmit(files);
  // };
  return (
    <>
      <Links />
      <Link to="/user/settings">Settings</Link>

      <div className="File Submit">
        <form onSubmit={onFormSubmit}>
          <div className="image upload">
            <label>Upload Image</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .pdf"
              value={files}
              onChange={(event) => setFiles(event.target.value)}
            />
          </div>
          {enabled ? (
            <button type="submit">Submit</button>
          ) : (
            <button disabled type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};
export default Profile;
