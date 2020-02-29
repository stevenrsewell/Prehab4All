import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarC() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
      <div>
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
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/directory"
              className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
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
              to="/directory"
              className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
            >
              Neck
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/directory"
              className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
            >
              Myofascial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavbarC;
