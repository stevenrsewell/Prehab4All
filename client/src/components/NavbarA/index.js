import React from "react";
import { Link } from "react-router-dom";
import "./style.css";





// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarA() {
<<<<<<< HEAD



=======
  //retrieving the userid from local storage 
>>>>>>> prehab
  let userId = localStorage.getItem("userID");
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

          </ul>

        )

      }

    </div>


  )
}


export default NavbarA;
