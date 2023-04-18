import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import HouseDetails from './components/HouseDetails/HouseDetails';
import HouseSearchResult from './components/HouseSearchResult/HouseSearchResult';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<HouseSearchResult />} />
          <Route path="/house-details/:zpid" element={<HouseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
