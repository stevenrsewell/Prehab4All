import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarC from "../components/NavbarC/index";

function Cervical() {
  return (
    <div>
      <NavbarC />
      <div>
        <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Cervical</h1>
        </Hero>
        <Container style={{ marginTop: 55, marginRight: 180 }}>
          <h1>Professional exercises videos targeting Cervical problems</h1>
          <br/>
          <Row>
            <Col size="md-12">
              <p>
                
<iframe src="https://www.instagram.com/p/B835m7mnsTQ/embed/captioned" width="500" height="600" paddingRight ="20px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

<iframe src="https://www.instagram.com/p/ByShUDZpKRe/embed/captioned" width="500" height="600" paddingRight ="20px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

<iframe src="https://www.instagram.com/p/ByiRqe9BlqW/embed/captioned" width="500" height="600" padding ="20px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
<a href="https://www.instagram.com/tv/Bza1B_MgwWJ/?utm_source=ig_embed&amp;utm_campaign=loading" ></a>

              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Cervical;
