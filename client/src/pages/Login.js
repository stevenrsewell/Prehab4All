// import React from "react";
// import HeroSmall from "../components/HeroSmall";
// import Container from "../components/Container";
// import NavbarL from "../components/NavbarL/index";
// // import LoginUser from "../components/LoginUser/index";

// function Login() {
//   return (
//     <div>
//       <NavbarL />
//       <div>
//           <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
//             <h1>Become a Member</h1>
//           </HeroSmall>
            
//           {/* <Container style={{ marginTop: 55, marginRight: 190 }}> */}
//           <div>
//             {/* <LoginUser /> */}
//           </div>
//           {/* </Container> */}
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import {Button,} from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import API from "../utils/API";

let userId = localStorage.getItem("userID");

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSignIn = e => {
    console.log("handleSignIn");
    e.preventDefault();
    API.getLoggedUser({ email: email, password: password })
      .then(response => {
        console.log("get one user", response.data);
        if (response.data) {
          API.getUserHash(email).then(response => {
            console.log("hash response", response.data);
            window.localStorage.setItem("userID", response.data._id);
            window.location.reload();

          });
         alert("successful Login");

          handleClose();
        } else {
          console.log("No user exit");
        }
      })
      .catch(error => {
        alert("User does not exist.");
        console.log(error);
      });
  };

  // const handleLogout = () => {
  //   window.localStorage.removeItem("userID");
  //   window.location.reload();
  // };

  return (
    <MDBContainer>
      Login
       {/* {!userId || userId === "" ? (
          <Button id="login-modal-button" onClick={handleShow}>
            <i id="login-button-icon" className="fas fa-sign-in-alt"></i>
            <p>Sign-In </p>
          </Button>
        ) : (
          <Link to="/">
            <Button id="logout-modal-button" onClick={handleLogout}>
              <i id="logout-button-icon" className="fas fa-sign-out-alt"></i>
              <p>Sign-Out</p>
            </Button>
          </Link>
        )}
         */}
        <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  value={email || ''}
            onChange={handleEmail}/>
          <MDBInput label="Type your password" icon="lock" group type="password" validate  value={password || ''}
                onChange={handlePassword} />
        </div>
        <div className="text-center">
          <MDBBtn id="sign-in" variant="primary" onClick={handleSignIn}> signin</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>

  </MDBContainer>
  );
}

export default Login;
