import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBarList: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    console.log('City:', city);
    onSearch(city);
  };

  return (
    <div className="SearchList-container">
      <input
        className="Search-input"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="Search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBarList;
