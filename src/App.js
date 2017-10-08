import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
      <div className="container">
      <Main />
    </div>
  </div>
)

export default App;
