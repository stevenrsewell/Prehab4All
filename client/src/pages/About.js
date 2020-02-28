import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
        <h1>Prehab: See you in health!</h1>
      </Hero>
      
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Watch the physiotherapy video that will make you feel better!</h3>
            <h3>Hips - Shoulder - Neck - Myofascial</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default About;