import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import AuthService from "../../services/AuthService";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/dinos">
          <li className="nav-item nav-link">Dinos</li>
        </Link>
        <Link to="/extractor">
          <li className="nav-item nav-link">Extractor</li>
        </Link>
        {user.role === "admin" ? (
          <Link to="/admin">
            <li className="nav-item nav-link">Admin</li>
          </Link>
        ) : null}
        <button type="button" className="btn btn-link nav-itm nav-link" onClick={onClickLogoutHandler}>
          Logout
        </button>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <div className="navbar-brand">Home</div>{" "}
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">{!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}</ul>
      </div>
    </nav>
  );
};
export default Navbar;

// function Navigation(props) {
//   return (
//     <div className="links">
//       <div className="home">
//         <Link to="/">Home</Link>
//       </div>
//       <div className="profile-link">
//         <Link to="/user">Profile</Link>
//       </div>
//       <div className="dinosaur-link">
//         <Link to="/dinosaur">Dinosaur input</Link>
//       </div>
//       <div className="library-link">
//         <Link to="/library">Library</Link>
//       </div>
//       <div className="extractor-link">
//         <Link to="/extractor">Extractor</Link>
//       </div>
//     </div>
//   );
// }
// export default Navigation;
