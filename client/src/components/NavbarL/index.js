import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Navbar from "react-bootstrap";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarL() {
  return (
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Prehab
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
                  to="/choices"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/choices"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Choices
                </Link>
              </li>
                    
            </ul>
          </div>
        </nav>
      );
    // // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     {/* <Navbar.Brand href="#home">
    //         <img
    //         alt=""
    //         src= "http://spineability.com/images/578ab961d280e.png"
          
    //         width="30"
    //         height="30"
    //         className="d-inline-block align-top"
    //       />{' '}
    //       React Bootstrap
    //     </Navbar.Brand> */}
  
}

export default NavbarL;
