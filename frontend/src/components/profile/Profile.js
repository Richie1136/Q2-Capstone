import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "../navigation/Links";
import "./Profile.css";

const Profile = ({ onFormSubmit }) => {
  const [setPicture] = useState(null);

  const [imgData, setImgData] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [tribeName, SetTribeName] = useState("");

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
          <button className="submit" type="submit">
            Upload
          </button>
          <div className="previewProfilePic"></div>
        </div>
        <br />
        <h1 className="Tribe">Enter Tribe Name</h1>
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
    </>
  );
};
export default Profile;
