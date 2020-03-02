// import React, { Component } from "react";
import React from "react";
// import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Hip from "./pages/Hip";
import Shoulder from "./pages/Shoulder";
import Myofascial from "./pages/Myofascial";
import Cervical from "./pages/Cervical";
import Login from "./pages/Login"
import Choices from "./pages/Choices"
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
              <Route exact path="/hip" component={Hip} />
              <Route exact path="/shoulder" component={Shoulder} />
              <Route exact path="/myofascial" component={Myofascial} />
              <Route exact path="/cervical" component={Cervical} />
              
          </Wrapper> 
        {/* <Footer />  */}
      </div>
    </Router>
    

  );
}

export default App;
