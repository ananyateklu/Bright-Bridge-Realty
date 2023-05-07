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
    if (additionalImages) {
      setDisplayedImage(additionalImages[0]);
    }
  }, [additionalImages]);

  const handleThumbnailClick = (image: string) => {
    setDisplayedImage(image);
  };

  if (!houseData) {
    return <div className='LoadDiv'><Loading /></div>;
  }
  return (
    <div className="House-details">
      <div className="side-bar">
        <div className="side-slider">
        {additionalImages.slice(0, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image)} // Add click event handler
          />
        ))}
        </div>
        <div className="side-details">
          Side details
        </div>
      </div>
      <div className="main">
        <div className="main-img">
          <img src={displayedImage} alt="House" />
        </div>
         <div className="property-info">
        <div className="property-info-address">
          <span className="label">Address:</span>
          <span>{houseData.address.streetAddress}, {houseData.address.city}, {houseData.address.state}</span>
        </div>
        <div className="property-info-type">
          <span className="label">Home Type:</span>
          <span>{houseData.homeType}</span>
        </div>
        <div className="property-info-price">
          <span className="label">Price:</span>
          <span>${houseData.price}</span>
        </div>
      </div>
      <div className="property-header">
          <h2>Description</h2>
          <div className="header-details">
            for {houseData.address.streetAddress}, {houseData.address.city}, {houseData.address.state}, {houseData.address.zipcode}
          </div>
        </div>
      <div className="property-description">
      <span>{houseData.description}</span>
      </div>
      <div className="listing-info">
      <h2>Listing Information</h2>
      </div>
      <div className="listing-detail">
          <div className="listing-lists>">
          
          <div>Status: </div>
          <div>Bedrooms: {houseData.bedrooms}</div>
          <div>Bathrooms:{houseData.bathrooms}</div>
          <div>Lot Size: {houseData.bathrooms}</div>
          <div>Square Feet: {houseData.livingAreaValue} sqft</div>
          <div>Year Built: {houseData.yearBuilt}</div>
          <div>Foundation: {houseData.homeType}</div>
          <div>Garage:{houseData.hasGarage}</div>
          <div>Stories:</div>
          <div>Property Attached:</div>
          <div>Subdivision:</div>
          <div>County:</div>
          <div>Construction Status:</div>
         
          </div>
      </div>
      <div className ="interior">
          <h2>Interior Features</h2>
      </div>
      <div className="interior-detail">
        <div className="interior-list">
          <div className="interior-name"> 3/4 Bath</div>
          <div className="interior-desc"> 1</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Above Grade Finished Area</div>
          <div className="interior-desc"> 2</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Bath Desc </div>
          <div className="interior-desc"> 3</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Below Grade Finished Area</div>
          <div className="interior-desc"> 4</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Dining Room Description</div>
          <div className="interior-desc"> 5</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Fireplace Features</div>
          <div className="interior-desc"> 6</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Fireplace Y/N</div>
          <div className="interior-desc"> 7</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Fuel</div>
          <div className="interior-desc"> 8</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Full Baths</div>
          <div className="interior-desc"> 9</div>
        </div>
        <div className="interior-list">
          <div className="interior-name"> Garage Square Feet</div>
          <div className="interior-desc"> 10</div>
        </div>
        

      </div>
      </div>
      
      
    </div>
  );
};

export default HouseDetails;