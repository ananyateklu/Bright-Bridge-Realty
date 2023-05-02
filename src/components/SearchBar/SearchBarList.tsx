import React, { useState, useEffect } from 'react';
import opencage from 'opencage-api-client';
import './SearchBar.css';

interface SearchBarProps {
  initialValues: {
    location: string;
    minPrice: string;
    maxPrice: string;
    bedsMin: string;
    bedsMax: string;
    bathsMin: string;
    bathsMax: string;
    home_type: string;
  };
  onSearch: (filters: {
    location: string;
    minPrice: string;
    maxPrice: string;
    bedsMin: string;
    bedsMax: string;
    bathsMin: string;
    bathsMax: string;
    home_type: string;
  }) => void;
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

const SearchBar: React.FC<SearchBarProps> = ({ initialValues, onSearch }) => {
  const [error, setError] = useState('');
  const [city, setCity] = useState(initialValues.location || '');
  const [minPrice, setMinPrice] = useState(initialValues.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(initialValues.maxPrice || '');
  const [bedsMin, setBedsMin] = useState(initialValues.bedsMin || '');
  const [bedsMax, setBedsMax] = useState(initialValues.bedsMax || '');
  const [bathsMin, setBathsMin] = useState(initialValues.bathsMin || '');
  const [bathsMax, setBathsMax] = useState(initialValues.bathsMax || '');
  const [homeType, setHomeType] = useState(initialValues.home_type || 'Houses');
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
    if (city.trim() !== '') {
      setError('');
      onSearch({
        location: city,
        minPrice: minPrice,
        maxPrice: maxPrice,
        bedsMin: bedsMin,
        bedsMax: bedsMax,
        bathsMin: bathsMin,
        bathsMax: bathsMax,
        home_type: homeType,
      });
    } else {
      setError('City or ZIP code is required');
    }
  };

  return (
    <div className="SearchList-container">
      <div className="Larger-search">
        <datalist id="citySuggestions">
          {suggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
        <div className="Filters-wrapper">
          <div className="Filter-container">
            <div className="Filter-item">
              <label className="Filter-label">City or ZIP Code</label>
              <input
                className={`Search-input-details ${error ? 'Input-error' : ''}`}
                type="text"
                placeholder="Enter city or ZIP code"
                value={city}
                onChange={(e) => {
                  setError('');
                  setCity(e.target.value);
                }}
                list="citySuggestions"
              />
              {error && <div className="Error-message">{error}</div>}
            </div>
            <div className="Filter-item">

              <label className="Filter-label">Price</label>
              <div className="Price-input-container">
                <input
                  className="Price-input"
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="Price-input-separator">-</span>
                <input
                  className="Price-input"
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="Filter-item">
              <label className="Filter-label">Type</label>
              <select
                className="Filter-dropdown"
                value={homeType}
                onChange={(e) => setHomeType(e.target.value)}
              >
                <option value="Houses">Houses</option>
                <option value="Condos">Condos</option>
                <option value="Townhomes">Townhomes</option>
              </select>
            </div>
            <div className="Filter-item">
              <label className="Filter-label">Beds</label>
              <div className="Price-input-container">
                <input
                  className="Price-input"
                  type="number"
                  placeholder="Min"
                  value={bedsMin}
                  onChange={(e) => setBedsMin(e.target.value)}
                />
                <span className="Price-input-separator">-</span>
                <input
                  className="Price-input"
                  type="number"
                  placeholder="Max"
                  value={bedsMax}
                  onChange={(e) => setBedsMax(e.target.value)}
                />
              </div>
            </div>
            <div className="Filter-item">
              <label className="Filter-label">Baths</label>
              <div className="Price-input-container">
                <input
                  className="Price-input"
                  type="number"
                  placeholder="Min"
                  value={bathsMin}
                  onChange={(e) => setBathsMin(e.target.value)}
                />
                <span className="Price-input-separator">-</span>
                <input
                  className="Price-input"
                  type="number"
                  placeholder="Max"
                  value={bathsMax}
                  onChange={(e) => setBathsMax(e.target.value)}
                />
              </div>
            </div>

            <button className="Filter-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


