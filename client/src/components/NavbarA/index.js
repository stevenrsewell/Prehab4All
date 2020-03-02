
import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarA() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        
          <Col>
            <Link className="navbar-brand" to="/">
              Prehab
                </Link>
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
              <Link
                to="/login"
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
              >
                Login
              </Link>
            </li>
          </Col>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarA;
