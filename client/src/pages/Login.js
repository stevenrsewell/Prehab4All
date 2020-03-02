import React from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarL from "../components/NavbarL/index";
// import LoginUser from "../components/LoginUser/index";

function Login() {
  return (
    <div>
      <NavbarL />
      <div>
          <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
            <h1>Become a Member</h1>
          </HeroSmall>
            
          {/* <Container style={{ marginTop: 55, marginRight: 190 }}> */}
          <div>
            {/* <LoginUser /> */}
          </div>
          {/* </Container> */}
      </div>
    </div>
  );
}

export default Login;