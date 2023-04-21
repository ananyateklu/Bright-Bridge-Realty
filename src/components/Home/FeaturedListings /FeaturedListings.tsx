import './FeaturedListings.css';
import React, { useState, useEffect } from 'react';
import fetchFeaturedListings from './FeaturedListingsApi';

const FeaturedListings: React.FC = () => {
  const [featuredImages, setFeaturedImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const images = await fetchFeaturedListings();
      setFeaturedImages(images);
    };

    fetchData();
  }, []);

  return (
    <div className="FeaturedListings">
      <div className="FeaturedListings-grid">
        {featuredImages.map((image, index) => (
          <img key={index} className="FeaturedListings-image" src={image} alt={`Featured listing ${index + 1}`} />
        ))}
        <div className="FeaturedListings-title">
          <h2>
            <span className="FeaturedListings-title-featured">FEATURED</span>{' '}
            <span className="FeaturedListings-title-listings">LISTINGS</span>
          </h2>
          <button className="FeaturedListings-button">VIEW ALL PROPERTIES</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
