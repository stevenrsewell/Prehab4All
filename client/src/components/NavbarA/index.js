import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Navbar from "react-bootstrap";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarA() {
  return (
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Prehab
          </Link>
          <div>
            <ul className="navbar-nav">              
              <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
              </li>                        
            </ul>
          </div>
        </nav>
      );
}

export default NavbarA;
