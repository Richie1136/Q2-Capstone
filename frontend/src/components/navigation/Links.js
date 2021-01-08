import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Links(props) {
  return (
    <div className="links">
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div className="profile-link">
        <Link to="/user">Profile</Link>
      </div>
      <div className="dinosaur-link">
        <Link to="/dinosaur">Dinosaur input</Link>
      </div>
      <div className="library-link">
        <Link to="/library">Library</Link>
      </div>
      <div className="extractor-link">
        <Link to="/extractor">Extractor</Link>
      </div>
    </div>
  );
}
