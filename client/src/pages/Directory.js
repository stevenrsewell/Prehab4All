// import React, { Component } from "react";

import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarD from "../components/NavbarD/index";

function Directory() {
  return (
    <div>
    <NavbarD />
    <div>
      <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
        <h1>Directory</h1>
      </Hero>
      
      <Container style={{ marginTop: 55, marginRight: 100 }}>
        <h1>Direcotry !!!!!!!!!!!!</h1>     
      </Container>
    </div>
    </div>
  );
}

export default Directory;