import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarC from "../components/NavbarC/index";

function Hip() {
  return (
    <div>
      <NavbarC />
      <div>
        <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Hip</h1>
        </Hero>
        <Container style={{ marginTop: 55, marginRight: 180 }}>
          <h1>Professional exercises videos targeting Hip problems</h1>
          <br/>
          <Row>
            <Col size="md-12">
              <p>
              
<iframe src="https://www.instagram.com/p/BpDhNwEAiGh/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

<iframe src="hhttps://www.instagram.com/p/BzqK8Alj0aN/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

<iframe src="https://www.instagram.com/p/Bz9ZgrRFKxV/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

<iframe src="https://www.instagram.com/p/Bz_Gwm6jX3V/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hip;