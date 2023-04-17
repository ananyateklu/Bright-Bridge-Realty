import React from 'react';
import logo from './assets/BBLogo.png';
import house from './assets/House1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href='/' className='Home-link'>Home</a>
      </header>
      <div className="House-container">
        <img src={house} className="House" alt="house" />
        <h1 className="House-text">OUR WEBSITE IS UNDER CONSTRUCTION</h1>
      </div>
    </div>
  );
}

export default App;
