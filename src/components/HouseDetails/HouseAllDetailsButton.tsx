// components/HouseDetailsButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HouseAllDetailsButtonProps {
  children: React.ReactNode;
}

const HouseAllDetailsButton: React.FC<HouseAllDetailsButtonProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("search?city=Minneapolis,%20Minnesota,%20United%20States%20of%20America");
  };

  return <button className='FeaturedListings-button' onClick={handleClick}>{children}</button>;
};

export default HouseAllDetailsButton;
