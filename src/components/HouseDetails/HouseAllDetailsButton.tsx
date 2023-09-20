import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HouseAllDetailsButtonProps {
  children: React.ReactNode;
}

const HouseAllDetailsButton: React.FC<HouseAllDetailsButtonProps> = ({ children }) => {
  const navigate = useNavigate();

  const citiesInMinnesota = [
    'Minneapolis', 
    'St. Paul', 
    'Rochester', 
    'Bloomington', 
    'Duluth', 
    'Brooklyn Park', 
    'Plymouth', 
    'Maple Grove', 
    'Woodbury', 
    'St. Cloud', 
    'Eagan', 
    'Eden Prairie', 
    'Coon Rapids', 
    'Burnsville', 
    'Blaine', 
    'Lakeville', 
    'Minnetonka', 
    'Apple Valley', 
    'Edina', 
    'St. Louis Park'
  ];

  const getRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * citiesInMinnesota.length);
    return citiesInMinnesota[randomIndex];
  };

  const handleClick = () => {
    const city = getRandomCity();
    navigate(`search?city=${encodeURIComponent(city)}, MN`);
  };

  return <button className='FeaturedListings-button' onClick={handleClick}>{children}</button>;
};

export default HouseAllDetailsButton;
