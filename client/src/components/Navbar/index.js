import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "./Login";
// import Signup from "./Signup";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      {props.login ?

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Hip
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/directory"
              className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
            >
              Shoulder
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
            >
              Myofascial
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/logout"
              className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
            >
              Log out
            </Link>
          </li>

        </ul>
        : //if not logged in 

        <ul>
          {/* <li className="nav-item">
            <Link
              to="/signin"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
            >
              Sign up
            </Link>
          </li> */}

          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Log in
            </Link>
          </li>

        </ul>
      }


    </nav>
  );
}

export default Navbar;
