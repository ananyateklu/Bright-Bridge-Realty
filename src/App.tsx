import React, { useState } from 'react';
import logo from './assets/BBLogo.png';
import house from './assets/House1.jpg';
import api from './services/api.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import HouseList from './components/HouseList/HouseList';

function App() {
  const [houses, setHouses] = useState([]);

  async function fetchData(city: string) {
    try {
      const response = await api.get('propertyExtendedSearch', {
        params: { location: city, home_type: 'Houses' },
      });
      console.log(response.data.props);
      setHouses(response.data.props);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="/" className="Home-link">
          Home
        </a>
      </header>
      <div className="House-container">
        <img src={house} className="House" alt="house" />
        <SearchBar onSearch={fetchData} />
      </div>
      <HouseList houses={houses} />
    </div>
  );
}

export default App;
