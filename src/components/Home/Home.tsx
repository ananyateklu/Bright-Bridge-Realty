import React, { useState } from 'react';
import house from '../../assets/House1.jpg';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import HouseSearchResult from '../HouseSearchResult/HouseSearchResult';

const Home: React.FC = () => {
    const [city, setCity] = useState('');
    const [searchSubmitted, setSearchSubmitted] = useState(false);
  
    const handleSearch = (searchedCity: string) => {
      setCity(searchedCity);
      setSearchSubmitted(true);
    };
  
    const handleCityChange = (newCity: string) => {
      setCity(newCity);
    };
  
    return (
      <div className="Home">
        {!searchSubmitted && <SearchBar onSearch={handleSearch} />}
        {searchSubmitted ? (
          <HouseSearchResult city={city} onCityChange={handleCityChange} />
        ) : (
          <div className="House-container">
            <img src={house} className="House" alt="house" />
          </div>
        )}
      </div>
    );
  };
  
  

export default Home;
