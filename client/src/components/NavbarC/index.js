import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";
import "./style.css";
import API from "../../utils/API"


function handleLogOut() {
  API.logout().then(function() {
     })
  localStorage.clear();
  window.location.replace("/");
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarC() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        
          <Col>
            <Link className="navbar-brand" to="/">
              Prehab
                </Link>
          </Col>

          <Col>
            <li className="nav-item">
              <Link
                to="/hip"
                className={window.location.pathname === "/hip" ? "nav-link active" : "nav-link"}
              >
                Hip
                  </Link>
            </li>
          </Col>

          <Col>
            <li className="nav-item">
              <Link
                to="/shoulder"
                className={window.location.pathname === "/shoulder" ? "nav-link active" : "nav-link"}
              >
                Shoulder
                  </Link>
            </li>
          </Col>

          <Col>
            <li className="nav-item">
              <Link
                to="/cervical"
                className={window.location.pathname === "/cervical" ? "nav-link active" : "nav-link"}
              >
                Cervical
                  </Link>
            </li>
          </Col>

          <Col>
            <li className="nav-item">
              <Link
                to="/myofascial"
                className={window.location.pathname === "/myofascial" ? "nav-link active" : "nav-link"}
              >
                Myofascial
                  </Link>
            </li>
          </Col>

          <Col>
            <li className="nav-item">
              <Link
                to="/favorites"
                className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
              >
                Favorites
                  </Link>
            </li>
          </Col>

          
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col> 
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
         
 
          <Col>
          <li className="nav-item">
              <button onClick={handleLogOut}>LogOut</button>
            </li>
          </Col>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarC;
