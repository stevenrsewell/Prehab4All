import React from "react";
import "./style.css";

function HeroSmall(props) {
  return (
    <div className="herosmall text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default HeroSmall;
