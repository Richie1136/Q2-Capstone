import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "../navigation/Links";
import "./Profile.css";
import { fetchPics, URL_BASE_URL, uploadPic } from '../url'

const Profile = ({ onFormSubmit }) => {
  const [photos, setPhotos] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [tribeName, SetTribeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadStatus, setUploadStatus] = useState(null)


  useEffect(() => {
    async function getPhotos() {
      setPhotos(await fetchPics());
    }

    getPhotos();
  }, []);

  const submitForm = async (event) => {
    try {
      event.preventDefault();
      await uploadPic(selectedFile);
      setUploadStatus("success");
    } catch {
      setUploadStatus("Unable to upload photo")
    } finally {
      setTimeout(() => {
        setUploadStatus(null)
      }, 3000);
    }
  };

  const onselectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <>
      <Links />
      <Link to="/user/settings">Settings</Link>
      {uploadStatus && <p>{uploadStatus}</p>}
      <form onSubmit={submitForm}>
        <input type="file" name="photo" onChange={onselectFile} />
        <button type="submit">Submit</button>
      </form>
      <div className="image upload">
        <h3 className="avatar">Avatar</h3>
        {photos.map((pic) => (
          <img key={pic} src={`${URL_BASE_URL}${pic}`} alt={pic} height="180px" width="180px" />
        ))}
      </div>
      <img className="profilePic" src={imgData} alt="" height="180px" width="180px" />
      <input
        className="imagesUpload"
        type="file"
        accept=".jpg, .jpeg, .pdf, .png, .svg"
      />
      <button className="uploadSubmit" type="submit">
        Upload
          </button>
      <div className="previewProfilePic"></div>
      <br />
      <h3 className="Tribe">Enter Tribe Name</h3>
      <div onSubmit={onFormSubmit}>
        <input type="text" value={tribeName} onChange={(event) => SetTribeName(event.target.value)} />
      </div>
      {enabled ? (
        <button className="submit" type="submit">
          Submit
        </button>
      ) : (
          <button className="tribeSubmit" disabled type="submit">
            Submit
          </button>
        )}
    </>
  );
};
export default Profile;
