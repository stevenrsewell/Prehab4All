import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarC() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Prehab
      </Link>
      <div>
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link
              to="/hip"
              className={window.location.pathname === "/hip" ? "nav-link active" : "nav-link"}
            >
              Hip
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/shoulder"
              className={window.location.pathname === "/shoulder" ? "nav-link active" : "nav-link"}
            >
              Shoulder
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cervical"
              className={window.location.pathname === "/cervical" ? "nav-link active" : "nav-link"}
            >
              Cervical
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/myofascial"
              className={window.location.pathname === "/myofascial" ? "nav-link active" : "nav-link"}
            >
              Myofascial
            </Link>
          </li>
          
         

        </ul>
      </div>
    </nav>
  );
}

export default NavbarC;
