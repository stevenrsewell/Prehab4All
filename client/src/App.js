// import React, { Component } from "react";
import React from "react";
// import { HashRouter, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About";
import hip from "./pages/hip";
import shoulder from "./pages/shoulder";
import myofascial from "./pages/myofascial";
import cervical from "./pages/cervical";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Choices from "./pages/Choices"
import Myvideos from "./pages/Favorite"
import Wrapper from "./components/Wrapper";




function App() {

  return (
     <Router>
      <div>
          <Wrapper>           
              <Route exact path="/" component={About} /> 
              <Route exact path="/about" component={About} />   
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/choices" component={Choices} />
              <Route exact path="/hip" component={hip} />
              <Route exact path="/shoulder" component={shoulder} />
              <Route exact path="/myofascial" component={myofascial} />
              <Route exact path="/cervical" component={cervical} />
              <Route exact path="/favorites" component={Myvideos} />
               </Wrapper> 
      </div>
    </Router>
    

  );
}

export default App;