import React from 'react';
import './Sold.css';
import House1 from '../../assets/House1.png';
import House2 from '../../assets/House2.png';
import House3 from '../../assets/House3.png';
import House4 from '../../assets/House4.png';
import House5 from '../../assets/House5.png';
import House6 from '../../assets/House6.png';
import House7 from '../../assets/House7.png';
import House8 from '../../assets/House8.png';
import House9 from '../../assets/House9.png';
import House10 from '../../assets/House10.png';
import House11 from '../../assets/House11.png';
import House12 from '../../assets/House12.png';
import House13 from '../../assets/House13.png';
import House14 from '../../assets/House14.png';
import House15 from '../../assets/House15.png';
import House16 from '../../assets/House16.png';
import House17 from '../../assets/House17.png';
import House18 from '../../assets/House18.png';

const Sold: React.FC = () => {
    return (
        <div className="Sold">
            <div className="sold-header">
                <h1>
                 <span>SOLD LISTINGS</span>
                </h1>
                <div className="House-list-sold">
                    <div className="House-item-sold" >
                        <img src={House1} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$349,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Bloomington</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2060 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House2} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$495,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Apple Valley</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">3835 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {5} Beds + {4} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House3} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$655,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Lakeville</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">4470 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {5} Beds + {4} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House4} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$390,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Lakeville</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2145 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House5} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$1,095,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Saint Paul</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Multi Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">6360 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                1BR Units (10) + 2BR Units (2) 
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House6} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$516,500</p>
                            <p className="House-item-city-sold House-item-data-sold">Apple Valley</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">	4076 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {3} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House7} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$369,900</p>
                            <p className="House-item-city-sold House-item-data-sold">Richfield</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Multi Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2236 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                            2BR Units (1) + 3BR Units (1) 
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House8} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$369,900</p>
                            <p className="House-item-city-sold House-item-data-sold">Richfield</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Multi Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2236 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {3} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House9} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$234,900</p>
                            <p className="House-item-city-sold House-item-data-sold">Columbia Heights</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">1754 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {2} Beds + {3} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House10} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$182,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Brooklyn Park</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">1524 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House11} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$419,900</p>
                            <p className="House-item-city-sold House-item-data-sold">Apple Valley</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2946 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {4} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House12} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$199,900</p>
                            <p className="House-item-city-sold House-item-data-sold">Fridley</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">1773 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {3} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House13} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$285,750</p>
                            <p className="House-item-city-sold House-item-data-sold">Lakeville</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2145 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House14} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$105,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Saint Paul</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">1120 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {3} Beds + {1} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House15} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$130,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Brooklyn Center</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">1394 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {3} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House16} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$130,000</p>
                            <p className="House-item-city-sold House-item-data-sold">Saint Paul</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">1286 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {3} Beds + {1} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House17} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">	$275,100</p>
                            <p className="House-item-city-sold House-item-data-sold">Burnsville</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2551 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {4} Beds + {4} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                    <div className="House-item-sold" >
                        <img src={House18} alt="House" className="House-item-image-sold" />
                        <div className="House-item-info-sold">
                            <p className="House-item-price-sold">$238,750</p>
                            <p className="House-item-city-sold House-item-data-sold">Roseville</p>
                            <p className="House-item-detail-sold">Type:</p>
                            <p className="House-item-detail-sold House-item-data-sold">Single Family</p>
                            <p className="House-item-detail-sold">Size:</p>
                            <p className="House-item-detail-sold House-item-data-sold">2176 sqft</p>
                            <p className="House-item-detail-sold">Rooms:</p>
                            <p className="House-item-detail-sold House-item-data-sold">
                                {3} Beds + {2} Baths
                            </p>
                        </div>
                        <hr className="House-item-divider-sold" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sold;
