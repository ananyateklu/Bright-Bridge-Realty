import React from 'react';
import logo from '../assets/BBLogo.png';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <a href="/" className="App-logo-link">
      <img src={logo} className="App-logo" alt="logo" />
      </a>
      <a href="/" className="Home-link">
        Home
      </a>
    </header>
  );
};

export default Header;
