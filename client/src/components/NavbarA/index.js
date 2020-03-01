import React  from "react";
import { Link } from "react-router-dom";
import "./style.css";

// import NavbarC from "/components/NavbarC"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarA() {

let userId = localStorage.getItem("_id");

         
console.log(userId);

 
   return (
    <div>
       {!userId || userId === "" ? (
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
       
      ) : (

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
            <li className="nav-item">
              <Link
                to="/About"
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                Logout
              </Link>
            </li>
  
          </ul>
          <h1>True</h1>
        </div>
      </nav>
      
      
      )
      
      }

        </div>
      
    
    ) }
 

export default NavbarA;
