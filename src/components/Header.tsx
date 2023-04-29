import React, { useEffect, useState } from 'react';
import logo from '../assets/BBLogo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`App-header${scrolled ? ' scrolled' : ''}`}>
       <a href="/" className="App-logo-link">
      <img src={logo} className="App-logo" alt="logo" />
      </a>
      <a href="/" className="Home-link">
        HOME
      </a>
      <a href="/search?city=55419" className="Search-link">
        SEARCH
      </a>
      <a href="/about" className="About-link">
        ABOUT
      </a>
      <a href="/contact" className="Contact-link">
        CONTACT
      </a>
    </header>
  );
};

export default Header;

