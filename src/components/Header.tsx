import React, { useEffect, useState } from 'react';
import logo from '../assets/BBLogo.png';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    const handleClickOutside = (event: MouseEvent) => {
      const burgerMenu = document.querySelector(".burger-menu");
      const burgerIcon = document.querySelector(".burger-icon");
      if (
        burgerMenu &&
        !burgerMenu.contains(event.target as Node) &&
        !burgerIcon?.contains(event.target as Node) &&
        burgerMenu.classList.contains("show")
      ) {
        burgerMenu.classList.remove("show");
        setBurgerMenuOpen(false);
      }
    };


    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const isHouseSearchResult = location.pathname.includes('/search');
  const showBurger = isHouseSearchResult || windowWidth <= 1000;

  return (
    <header className={`App-header${scrolled ? ' scrolled' : ''}`}>
      <a href="/" className="App-logo-link">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      {showBurger ? (
        <div className="burger-icon" onClick={toggleBurgerMenu}>
          <span>☰</span>
        </div>
      ) : (
        <>
          <a href="/" className="Home-link">
            HOME
          </a>
          <a href="/search?city=Minneapolis, MN" className="Search-link">
            SEARCH
          </a>
          <a href='/sold' className='Sold-link'>SOLD LISTINGS</a>
          <a href="/about" className="About-link">
            ABOUT
          </a>
          <a href="/contact" className="Contact-link">
            CONTACT
          </a>
        </>
      )}
      <div className={`burger-menu${burgerMenuOpen ? ' show' : ''}`}>
        <a href="/" className="Home-link-burger" onClick={toggleBurgerMenu}>
          HOME
        </a>
        <a href="/search?city=Minneapolis, MN" className="Search-link-burger" onClick={toggleBurgerMenu}>
          SEARCH
        </a>
        <a href='/sold' className='Sold-link-burger'>SOLD LISTINGS</a>
        <a href="/about" className="About-link-burger" onClick={toggleBurgerMenu}>
          ABOUT
        </a>

        <a href="/contact" className="Contact-link-burger" onClick={toggleBurgerMenu}>
          CONTACT
        </a>
      </div>
    </header>
  );
};

export default Header;
