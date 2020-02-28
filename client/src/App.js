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

