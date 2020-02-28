// import React, { Component } from "react";
import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
import Directory from "./pages/Directory";
// import About from "./pages/Signin";
// import About from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {

  return (
     <HashRouter basename='/'>
      <div>
        <Navbar />
          <Wrapper>           
              <Route exact path="/" component={About} /> 
              <Route exact path="/about" component={About} />
              <Route exact path="/directory" component={Directory} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/login" component={Login} />
              
          </Wrapper> 
        <Footer /> 
      </div>
    </HashRouter>
  );
}

export default App;

