import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "../navigation/Links";
import Settings from "../profile/settings/Settings";
import "./Profile.css";

const Profile = ({ onFormSubmit }) => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [tribeName, SetTribeName] = useState("");

  const onInputChange = (event) => {
    SetTribeName(event.value.target);
  };

  const onChangePicture = (event) => {
    if (event.target.files[0]) {
      console.log("picture: ", event.target.files);
      setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // onFormSubmit(files);
  };

  // useEffect(() => {
  //   if (files.length === 0) {
  //     setEnabled(false);
  //   } else {
  //     setEnabled(true);
  //   }
  // }, [files]);

  useEffect(() => {
    if (tribeName.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [tribeName]);

  return (
    <>
      <Links />
      <Link to="/user/settings">Settings</Link>
      <form className="File Submit">
        <div className="image upload">
          <label className="avatar">Avatar</label>
          <img className="ProfilePic" src={imgData} alt="" height="180px" width="180px" />
          <input
            className="images"
            type="file"
            accept=".jpg, .jpeg, .pdf, .png, .svg"
            // value={files}
            // onChange={(event) => setFiles(event.target.value)}
            onChange={onChangePicture}
          />
<<<<<<< HEAD:frontend/src/screens/Profile.js
          <button className="submit" type="submit">Upload</button>
          <div className="previewProfilePic">
          </div>
=======
          <button type="submit">Upload</button>
          <div className="previewProfilePic"></div>
>>>>>>> fe4858d... Organized file structure and cleared up errors in console:frontend/src/components/profile/Profile.js
        </div>
        <br />
        <h1>Enter Tribe Name</h1>
        <div onSubmit={onFormSubmit}>
          <input type="text" value={tribeName} onChange={(event) => SetTribeName(event.target.value)} />
        </div>
        {enabled ? (
          <button type="submit">Submit</button>
        ) : (
          <button disabled type="submit">
            Submit
          </button>
        )}
      </form>
      <Settings />
    </>
  );
};
export default Profile;
