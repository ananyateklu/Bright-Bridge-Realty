import React from 'react';
import './OurListings.css';
import House1 from '../../assets/ListedHouse.jpeg';


const OurListings: React.FC = () => {
    return (
        <div className="Our-listings">
            <div className="our-listings-header">
                <h1>
                    <span>OUR LISTINGS</span>
                </h1>
                <p className='our-listings-details'>Here are the properties currently listed on BrightBridge Realty</p>
                <div className="House-list-our-listings">
                    <div className="House-item-our-listings" >
                        <img src={House1} alt="House" className="House-item-image-our-listings" />
                        <div className="House-item-info-our-listings">
                            <p className="House-item-price-our-listings">$399,900</p>
                            <p className="House-item-city-our-listings House-item-data-our-listings">6938 Portland Ave Richfield, MN 55423</p>
                            <p className="House-item-detail-our-listings">Type:</p>
                            <p className="House-item-detail-our-listings House-item-data-our-listings">Single Family</p>
                            <p className="House-item-detail-our-listings">Size:</p>
                            <p className="House-item-detail-our-listings House-item-data-our-listings">1610 sqft</p>
                            <p className="House-item-detail-our-listings">Rooms:</p>
                            <p className="House-item-detail-our-listings House-item-data-our-listings">
                                {5} Beds + {2} Baths
                            </p>
                            <p className='House-item-detail-our-listings'>MLS ID:</p>
                            <p className="House-item-detail-our-listings House-item-data-our-listings">
                                6470325
                            </p>
                        </div>
                        <hr className="House-item-divider-our-listings" />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurListings;
