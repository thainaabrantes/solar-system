import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import logo from './images/logo-trybe.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SolarSystem />
        <Missions />
        <img src={ logo } alt="Logo Trybe" />
      </div>
    );
  }
}

export default App;
