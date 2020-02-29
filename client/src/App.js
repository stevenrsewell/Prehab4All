// import React, { Component } from "react";
import React from "react";
// import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Directory from "./pages/Directory";
import Login from "./pages/Login"
import Choices from "./pages/Choices"
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



function App() {

  return (
     <Router>
      <div>
          <Wrapper>           
              <Route exact path="/" component={About} /> 
              <Route exact path="/about" component={About} />   
              <Route exact path="/login" component={Login} />
              <Route exact path="/choices" component={Choices} />
              <Route exact path="/directory" component={Directory} />
              
          </Wrapper> 
        <Footer /> 
      </div>
    </Router>
    

  );
}

export default App;
