import React from 'react';
import logo from '../assets/BBLogo.png';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a href="/" className="Home-link">
        Home
      </a>
    </header>
  );
};

export default Header;
