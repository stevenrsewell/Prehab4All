
import React from 'react';
// import { Router ,Switch ,Route } from "react-router-dom";
import Login from "./components/Login"

import Signup from "./components/Signup"
function App() {

  return (
    <div className="App">
   <Login  login={Login}/>
   <Signup  Signup={Signup}/>
  </div>
  );
}

export default App;

