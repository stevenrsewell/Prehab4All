import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarC from "../components/NavbarC/index";

function Shoulder() {
  return (
    <div>
      <NavbarC />
      <div>
        <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Shoulder</h1>
        </Hero>
        <Container style={{ marginTop: 55, marginRight: 180 }}>
          <h1>Professional exercises videos targeting Shoulder problems</h1>
          <br/>
          <Row>
            <Col size="md-12">
              <p>
                <iframe src="https://www.instagram.com/p/BrpujmWl5iW/embed/captioned" width="340" height="445" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

                <iframe src="https://www.instagram.com/p/B2mC2C2DPiM/embed/captioned" width="340" height="445" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

                <iframe src="https://www.instagram.com/tv/B3kANWyAi5I/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;

                <iframe src="https://www.instagram.com/tv/B33bfcZi3Lc/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>;
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}


export default Shoulder;