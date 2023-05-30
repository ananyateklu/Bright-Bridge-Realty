
import React, { useState } from 'react';
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



const App = () => {
  const [showContactForm, setShowContactForm] = useState(true);
  const [showMortgageCalculator, setShowMortgageCalculator] = useState(false);

  const handleContactSubmit = () => {
    setShowContactForm(false);
    setShowMortgageCalculator(true);
  
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<HouseSearchResult />} />
          <Route
          path="/house-details/:zpid"
          element={<HouseDetails />}
        />
          <Route path="/about" element={<About  />} />
          <Route
          path="/contact"
          element={
            <Contact
              onContactSubmit={handleContactSubmit}
              
            />
          }
        />
          <Route path="/mortgage" element={<Mortgage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
