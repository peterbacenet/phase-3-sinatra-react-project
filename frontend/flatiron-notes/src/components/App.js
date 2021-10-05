import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import NavBar from "./NavBar"
import Login from "./Login"
import Body from "./Body"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Login />
      <Body />
    </div>
  );
}

export default App;
