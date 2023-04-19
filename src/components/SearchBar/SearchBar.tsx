import React, { useState, useEffect } from 'react';
import opencage from 'opencage-api-client';
import './SearchBar.css';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

interface Result {
    formatted: string;
}

const minnesotaBounds = {
    southwest: { lat: 43.499356, lng: -97.239256 },
    northeast: { lat: 49.384358, lng: -89.491247 },
};

const isWithinMinnesotaBounds = (lat: number, lng: number) => {
    return (
        lat >= minnesotaBounds.southwest.lat &&
        lat <= minnesotaBounds.northeast.lat &&
        lng >= minnesotaBounds.southwest.lng &&
        lng <= minnesotaBounds.northeast.lng
    );
};



const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const API_KEY = process.env.REACT_APP_OPENCAGE_KEY;


    useEffect(() => {
        if (city.length > 0) {
          opencage
            .geocode({
              q: `${city}, Minnesota`,
              key: API_KEY,
              language: 'en',
              limit: 5,
              bounds: `${minnesotaBounds.southwest.lat},${minnesotaBounds.southwest.lng},${minnesotaBounds.northeast.lat},${minnesotaBounds.northeast.lng}`,
            })
            .then(({ results }) => {
              const citySuggestions = results
                .filter((result: any) =>
                  isWithinMinnesotaBounds(result.geometry.lat, result.geometry.lng),
                )
                .map((result: Result) => result.formatted);
              setSuggestions(citySuggestions);
            })
            .catch((error) => {
              console.error('Error fetching city suggestions:', error.message);
            });
        } else {
          setSuggestions([]);
        }
      }, [city, API_KEY]);      

    const handleSearch = () => {
        console.log('City:', city);
        onSearch(city);
    };

    return (
        <div className="Search-container">
            <input
                className="Search-input"
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                list="citySuggestions"
            />
            <datalist id="citySuggestions">
                {suggestions.map((suggestion) => (
                    <option key={suggestion} value={suggestion} />
                ))}
            </datalist>
            <button className="Search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
