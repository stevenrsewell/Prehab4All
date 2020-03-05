
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import API from "../utils/API"
import HeroSmall from "../components/HeroSmall";
import NavbarL from "../components/NavbarL/index";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
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
        if (response.data) {
          API.getUserHash(email).then(response => {
            window.localStorage.setItem("userID", response.data._id);
            window.location.replace("/Choices");
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
 
  return (
    <div>
    <NavbarL />
    <div>
        <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Become a Member</h1>
        </HeroSmall>
          <br></br>
          <br></br>
          <br></br>
       
                <MDBContainer>
                  <MDBRow>
              <MDBCol md="6">
                <form>
                  <div className="grey-text">

                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                      success="right"  value={email || ''}
                      onChange={handleEmail}/>
                    <MDBInput label="Type your password" icon="lock" group type="password" validate  value={password || ''}
                          onChange={handlePassword} />
                  </div>
                  <div className="text-center">
                    <MDBBtn className="h5 text-center mb-4" id="sign-in" variant="primary" onClick={handleSignIn}> signin</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
          </div>
        
  </div>
        
    
  );
}
export default Login;