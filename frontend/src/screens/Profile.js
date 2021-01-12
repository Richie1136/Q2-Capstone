import React, { useState, useEffect } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Links from "../components/navigation/Links";
import './Profile.css'
=======
import { Link } from "react-router-dom";
import Links from "../components/navigation/Links";
>>>>>>> 8a3ecf4... adjusted navigation so everything is at top of page under theme toggler

const Profile = ({ onFormSubmit }) => {
  const [files, setFiles] = useState([]);
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null)
  const [enabled, setEnabled] = useState(false);
  const [tribeName, SetTribeName] = useState('')

  const onInputChange = (event) => {
    SetTribeName(event.value.target)
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
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // onFormSubmit(files);
  };


=======
const Profile = ({ onFormSubmit }) => {
  const [files, setFiles] = useState([]);
  const [enabled, setEnabled] = useState(false);
>>>>>>> a994305... Working on API and navbar
  useEffect(() => {
    if (tribeName.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
<<<<<<< HEAD
  }, [tribeName]);
=======
  }, [files]);
>>>>>>> a994305... Working on API and navbar
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   onFormSubmit(files);
  // };
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8a3ecf4... adjusted navigation so everything is at top of page under theme toggler
    <>
      <Links />
      <Link to="/user/settings">Settings</Link>

<<<<<<< HEAD
      <form className="File Submit">
=======
    <div className="File Submit">
      <form onSubmit={onFormSubmit}>
>>>>>>> a994305... Working on API and navbar
        <div className="image upload">
          <label>Upload Image</label>
          <img className="ProfilePic" src={imgData} height="180px" width="180px" />
          <input
            type="file"
            accept=".jpg, .jpeg, .pdf, .png .svg"
            onChange={onChangePicture}
          />

          <button type="submit">Submit</button>
<<<<<<< HEAD
          <div className="previewProfilePic">

          </div>
        </div>
        <br />
        <h1>Enter Tribe Name</h1>
        <div onSubmit={onFormSubmit} >
          <input
            type="text"
            value={tribeName}
            onChange={(event) => SetTribeName(event.target.value)}
          />
        </div>
        {
          enabled ? (
            <button type="submit">Submit</button>
          ) : (
              <button disabled type="submit">
                Submit
              </button>
            )
        }
      </form>
    </>
  )
}
=======
        ) : (
          <button disabled type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
=======
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
>>>>>>> 8a3ecf4... adjusted navigation so everything is at top of page under theme toggler
  );
};
>>>>>>> a994305... Working on API and navbar
export default Profile;
