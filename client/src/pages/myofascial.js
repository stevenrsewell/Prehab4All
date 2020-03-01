import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NavbarC from "../components/NavbarC/index";
import Button from "react-bootstrap/Button";
function Myofascial() {
  return (
    <div>
      <NavbarC />
      <div>
        <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Myofascial</h1>
        </Hero>
        <Container style={{ marginTop: 55, marginRight: 180 }}>
          <h1>Professional exercises videos targeting Myofascial problems</h1>
          <br/>
          <Row>
            <Col size="md-12">
              <p>
                     
<iframe  id ="1" src="https://www.instagram.com/tv/Bza1B_MgwWJ/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true">
</iframe>
<button id ="save" className="mx-auto" >Save</button>   
<iframe  id ="2" src="https://www.instagram.com/p/Br0D99DgkF0/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
<button id ="save" className="mx-auto" >Save</button>   
<iframe id ="3"  src="https://www.instagram.com/p/BrSjGBwgrc4/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
<button id ="save" className="mx-auto" >Save</button>   
<iframe  id ="4" src="https://www.instagram.com/p/BjbDgN8Fapv/embed/captioned" width="640" height="745" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
<button id ="save" className="mx-auto" >Save</button>   
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Myofascial;