import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Navbar from "react-bootstrap";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Navbar.Brand href="#home">
            <img
            alt=""
            src= "http://spineability.com/images/578ab961d280e.png"
          
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand> */}


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
              to="/client/src/pages/hip.js"
              className={window.location.pathname === "/client/src/pages/hip.js" ? "nav-link active" : "nav-link"}
            >
              Shoulder
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/client/src/pages/shoulder.js"
              className={window.location.pathname === "/client/src/pages/shoulder.js" ? "nav-link active" : "nav-link"}
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
          <li className="nav-item">
            <Link
              to="/signin"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
            >
              Sign up
            </Link>
          </li>

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
