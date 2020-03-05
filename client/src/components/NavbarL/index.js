import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function NavbarL() {
  return (
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Prehab
          </Link>
          </nav>
      );
    
  
}

export default NavbarL;
