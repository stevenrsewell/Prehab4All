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
                 
                </p>
              </div>
            </div>      
        </Container>
      </div>
    </div>
  );
}

export default Myvideos;