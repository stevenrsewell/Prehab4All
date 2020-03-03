import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarA from "../components/NavbarA/index";

function About() {
  return (
    <div>
      <NavbarA />
      <div>
        <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <br></br>
          <br></br>
          <br></br>
          <h1>Prehab: See you in health!</h1>
          <h2>Watch Physiotherapy Videos by Medical Professionals</h2>
        </Hero>

        {/* <Container style={{ marginTop: 55, marginRight: 100 }}>
        <h1>Watch Physiotherapy Videos by Medical Professionals</h1>     
      </Container> */}
      </div>
    </div>
  );
}

export default About;