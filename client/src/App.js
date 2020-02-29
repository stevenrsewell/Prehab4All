// import React, { Component } from "react";
import React from "react";
// import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About";
// import Directory from "./pages/Directory";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



function App() {

  return (
     <Router basename='/Prehab4All'>
      <div>
        <Navbar />
          <Wrapper>           
              <Route exact path="/" component={About} /> 
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/directory" component={Directory} /> */}
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              
          </Wrapper> 
        <Footer /> 
      </div>
    </Router>
   
  );
}

export default App;

