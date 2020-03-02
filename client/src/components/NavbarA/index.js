import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API"




// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarA() {

  function handleLogOut() {
    API.logout().then(function() {
      console.log("logged out")
      
    })
    localStorage.clear();
    window.location.replace("/");
  }

  let userId = localStorage.getItem("userID");


  console.log(userId);


  return (
    <div>
      {!userId || userId === "" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <div>
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link
                  to="/Signup"
                  className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                >
                  Signup
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Login"
                  className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                >
                  Login
            </Link>
              </li>
            </ul>
          </div>

        </nav>

      ) : (
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link
                to="/Choices"
                className={window.location.pathname === "/choices" ? "nav-link active" : "nav-link"}
              >
                Choices
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          </ul>

        )

      }

    </div>


  )
}


export default NavbarA;
