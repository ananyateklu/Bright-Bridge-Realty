import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HouseDetails.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loading'; 

interface RouteParams extends Record<string, string | undefined> {
  zpid: string;
}

const HouseDetails: React.FC = () => {
  const { zpid } = useParams<RouteParams>();
  const [houseData, setHouseData] = useState<any>(null);

  
  useEffect(() => {
    const fetchHouseDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://zillow-com1.p.rapidapi.com/property',
        params: { zpid },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      };
      
      try {
        const response = await axios.request(options);
        setHouseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHouseDetails();
  }, [zpid]);

  if (!houseData) {
    return <div className='LoadDiv'><Loading /></div>;
}

  return (
    <div className="House-details">
      <div className="House-details">
        <h1>{houseData.address.streetAddress}</h1>
        <img src={houseData.imgSrc} alt="House" />
        <p>Price: $ {houseData.price}</p>
        <p>Bedrooms: {houseData.bedrooms}</p>
        <p>Bathrooms: {houseData.bathrooms}</p>
        <p>Living Area: {houseData.livingAreaValue} sqft</p>
        <p>Year Built: {houseData.yearBuilt}</p>
        <p>Home Type: {houseData.homeType}</p>
        <p>Description: {houseData.description}</p>
      </div>
    </div>
  );
};

export default HouseDetails;
