import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import HouseDetails from './components/HouseDetails/HouseDetails';
import HouseSearchResult from './components/HouseSearchResult/HouseSearchResult';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer';
import Mortgage from './components/Mortgage/Mortgage';
import Sold from './components/Sold/Sold';
import house from "../src/assets/mobile.jpg";
import logo from '../src/assets/BBLogo.png';

function App() {
  const isMobile = window.matchMedia("only screen and (max-width: 1200px)").matches;

  if (isMobile) {
    return <div className="Home">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="mobilePrompt">Sorry, this website is only available on desktop devices.</div>
      <div className="mobile">
        <img src={house} alt="house" />
      </div>
    </div>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<HouseSearchResult />} />
          <Route path="/house-details/:zpid" element={<HouseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mortgage" element={<Mortgage />} />
          <Route path='/sold' element={<Sold />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
