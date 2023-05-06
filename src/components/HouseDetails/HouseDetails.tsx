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
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const [displayedImage, setDisplayedImage] = useState<string>('');
  
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
      const additionalImagesOptions = {
        method: 'GET',
        url: 'https://zillow-com1.p.rapidapi.com/images',
        params: { zpid },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      };
      function wait(): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 3000); // 3 seconds in milliseconds
        });
      }
  
      try {
        const response = await axios.request(options);
        setHouseData(response.data);
        await wait();
        const additionalImagesResponse = await axios.request(additionalImagesOptions);
        setAdditionalImages(additionalImagesResponse.data.images);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchHouseDetails();
  }, [zpid]);

  useEffect(() => {
    if (houseData) {
      setDisplayedImage(houseData.imgSrc);
    }
  }, [houseData]);

  const handleThumbnailClick = (image: string) => {
    setDisplayedImage(image);
  };

  if (!houseData) {
    return <div className='LoadDiv'><Loading /></div>;
  }
  return (
    <div className="House-details">
      <div className="side-bar">
        {additionalImages.slice(0, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image)} // Add click event handler
          />
        ))}
      </div>
      <div className="main">
        <div className="main-img">
          <img src={displayedImage} alt="House" />
        </div>
        <div className="details">
      <h2>Image Title</h2>
      <ul>
        <li>Description: {houseData.description}</li>
        <li>Price: $ {houseData.price}</li>
        <li>Bedrooms: {houseData.bedrooms}</li>
        <li>Bathrooms: {houseData.bathrooms}</li>
        <li>Living Area: {houseData.livingAreaValue} sqft</li>
        <li>Year Built: {houseData.yearBuilt}</li>
        <li>Home Type: {houseData.homeType}</li>
        
      </ul>
    </div>
        </div>
      
      
    </div>
  );
};

export default HouseDetails;