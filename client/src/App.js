// import React, { Component } from "react";
import React from "react";
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

