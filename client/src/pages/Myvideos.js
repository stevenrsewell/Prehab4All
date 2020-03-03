import React from "react";
import HeroSmall from "../components/HeroSmall";
import Container from "../components/Container";
import NavbarC from "../components/NavbarC/index";
function Myvideos() {
  return (
    <div>
      <NavbarC />
      <div>
        <HeroSmall backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>My Favorite Videos</h1>
        </HeroSmall>
        <Container style={{ marginTop: 55, marginRight: 120 }}>
           <div className="row"> 
              <div className="col-lg-12">
                <p>
                  <br></br>
                  {/* This list will have the list of links extracted from the DB for this user */}
                  {/* <List myvideosArray={myvideosArray} />; */}
                  <iframe src="https://www.instagram.com/p/B835m7mnsTQ/embed/captioned" width="540" height="545" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>;
                </p>
              </div>
            </div>      
        </Container>
      </div>
    </div>
  );
}

export default Myvideos;