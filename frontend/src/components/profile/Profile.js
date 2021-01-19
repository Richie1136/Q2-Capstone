import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "../navigation/Links";
import "./Profile.css";
import { fetchPics, URL_BASE_URL, uploadPic } from '../url'

const Profile = ({ onFormSubmit }) => {
  const [photos, setPhotos] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [tribeName, SetTribeName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadStatus, setUploadStatus] = useState(null)
  const [fetchStatusError, setFetchStatusError] = useState(null)

  const onInputChange = (event) => {
    SetTribeName(event.value.target)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // onFormSubmit(tribeName)
  }


  useEffect(() => {
    async function getPhotos() {
      setPhotos(await fetchPics());
    }

    getPhotos();
  }, []);

  const refetchPhotos = async () => {
    try {
      setFetchStatusError(null);
      setPhotos(await fetchPics());
    } catch {
      setFetchStatusError("unable to fetch photos")
    }
  };

  const submitForm = async (event) => {
    try {
      // event.preventDefault();
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
      <div className="image upload" z>
        {fetchStatusError && <p>{fetchStatusError} </p>}
        {uploadStatus && <p>{uploadStatus}</p>}
        <form onSubmit={submitForm}>
          <input type="file" name="photo" onChange={onselectFile} />
          <button type="submit">Submit</button>
        </form>
        {photos.map((pic) => (
          <img key={pic} src={`${URL_BASE_URL}${pic}`} alt={pic} height="180px" width="180px" />
        ))}
      </div>

      <br />
      <h3 className="Tribe">Enter Tribe Name</h3>
      <form onSubmit={onFormSubmit}>
        <input type="text"
          value={tribeName}
          onChange={(event) => SetTribeName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

    </>
  );
};
export default Profile;
