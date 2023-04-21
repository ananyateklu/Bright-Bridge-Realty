// components/HouseDetailsButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HouseDetailsButtonProps {
  zpid: string;
  children: React.ReactNode;
}

const HouseDetailsButton: React.FC<HouseDetailsButtonProps> = ({ zpid, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/house-details/${zpid}`);
  };

  return <button className='FeaturedListings-details-button' onClick={handleClick}>{children}</button>;
};

export default HouseDetailsButton;
