import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarL from "../components/NavbarL/index";

function Login() {
  return (
    <div>
    <NavbarL />
    <div>
      <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
        <h1>Login Page from Bhavana</h1>
      </Hero>
      
      <Container style={{ marginTop: 55, marginRight: 100 }}>
        <h1>Longin Page from Bhavana</h1>     
      </Container>
    </div>
    </div>
  );
}

export default Login;