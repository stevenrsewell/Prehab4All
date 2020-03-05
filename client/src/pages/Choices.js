import React from "react";
import Hero from "../components/Hero";
import NavbarC from "../components/NavbarC/index";

function Choices() {
  return (
    <div>
      <NavbarC />
      <div>
        <Hero backgroundImage="https://kromboommedical.co.za/wp-content/uploads/2016/09/image3.jpg">
          <h1>Prehab: See you in health!</h1>
          <h2>Physiotherapy Videos - Hip, Shoulder, Cervical and Myofascial</h2>
        </Hero>
      </div>
    </div>
  );
}

export default Choices;