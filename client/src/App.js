// import React, { Component } from "react";
import React from "react";
// import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hip from "./pages/Hip";
import Shoulder from "./pages/Shoulder";
import Myofascial from "./pages/Myofascial";
import Cervical from "./pages/Cervical";
import About from "./pages/About";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Choices from "./pages/Choices"
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import NavbarA from "./components/NavbarA"



function App() {

  return (
   
     <Router>
      <div>
      <NavbarA/>
          <Wrapper>           
             
              <Route exact path="/login" component={Login} />
              <Route exact path="/login" component={Signup} />
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/choices" component={Choices} />
              <Route exact path="/hip" component={Hip} />
              <Route exact path="/shoulder" component={Shoulder} />
              <Route exact path="/myofascial" component={Myofascial} />
              <Route exact path="/cervical" component={Cervical} />
              
          </Wrapper> 
        <Footer /> 
      </div>
    </Router>
  
    

  );
}

export default App;
