import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api.js';
import './HouseList.css';

interface House {
  zpid: string;
  imgSrc: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  livingArea: number;
}

const HouseList: React.FC = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const { city } = useParams();

  useEffect(() => {
    if (city) {
      fetchData(city);
    }
  }, [city]);
  

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

  const renderHouse = (house: House) => (
    <div className="House-item" key={house.zpid}>
      <img src={house.imgSrc} alt="House" className="House-item-image" />
      <div className="House-item-info">
        <h3>{house.address}</h3>
        <p>Price: ${house.price.toLocaleString()}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Bathrooms: {house.bathrooms}</p>
        <p>Living Area: {house.livingArea} sqft</p>
      </div>
    </div>
  );

  return (
    <div className="House-list">
      {houses.map((house) => renderHouse(house))}
    </div>
  );
};

export default HouseList;
