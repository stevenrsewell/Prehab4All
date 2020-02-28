
// import React from 'react';
// import { Router ,Switch ,Route } from "react-router-dom";
// import Login from "./components/Login"
// import About from "./pages/About"
// import Signup from "./components/Signup"
// function App() {

//   return (
//     <div className="App">
//    <Login  login={Login}/>
//    <Signup  Signup={Signup}/>
//   </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Navbar from "./components/Navbar";

// import Wrapper from "./components/Wrapper";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Signup} />
          <Route exact path="/login" component={Login} />
          
    
      
       
      </div>
    </Router>
  );
}

export default App;

