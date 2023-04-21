import './FeaturedListings.css';
import React, { useState, useEffect } from 'react';
import fetchFeaturedListings from './FeaturedListingsApi';
import HouseDetailsButton from '../../HouseDetails/HouseDetailsButton';
import HouseAllDetailsButton from '../../HouseDetails/HouseAllDetailsButton';

const FeaturedListings: React.FC = () => {
  const [featuredImages, setFeaturedImages] = useState<string[]>([]);
  const [listingData, setListingData] = useState<any[]>([]);
  const extractCityAndStateFromAddress = (address: string): string => {
    const cityAndStateRegex = /,\s*([^,]+,\s*\w{2})/;
    const cityAndStateMatch = address.match(cityAndStateRegex);
    return cityAndStateMatch ? cityAndStateMatch[1] : address;
  };
  useEffect(() => {
    const fetchData = async () => {
      const [images, data] = await fetchFeaturedListings();
      setFeaturedImages(images);
      setListingData(data);
    };

    fetchData();
  }, []);


  return (
    <div className="FeaturedListings">
      <div className="FeaturedListings-grid">
        {featuredImages.map((image, index) => (
          <div
            key={index}
            className="FeaturedListings-image"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={`Featured listing ${index + 1}`}
          >
            {listingData[index] && (
              <>
                <h3 className="FeaturedListings-price">$ {listingData[index].price}</h3>
                <p className="FeaturedListings-address">{extractCityAndStateFromAddress(listingData[index].address)}</p>
                <HouseDetailsButton zpid={listingData[index].zpid}>View Details</HouseDetailsButton>
              </>
            )}
          </div>
        ))}
        <div className="FeaturedListings-title">
          <h1>
            <span className="FeaturedListings-title-featured">FEATURED</span>{' '}
            <span className="FeaturedListings-title-listings">LISTINGS</span>
          </h1>
         <HouseAllDetailsButton>VIEW ALL PROPERTIES</HouseAllDetailsButton>
        </div>
      </div>
    </div>
  );
}

export default FeaturedListings;
