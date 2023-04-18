import React from 'react';
import './HouseList.css';

interface House {
    zpid: string;
    imgSrc: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    livingArea: number;
}

interface HouseListProps {
    houses: House[];
}

const HouseList: React.FC<HouseListProps> = ({ houses }) => {
    const renderHouse = (house: House) => (
        <div className="House-item" key={house.zpid}>
            <img src={house.imgSrc} alt="House" className="House-item-image" />
            <div className="House-item-info">
                <h3>{house.address}</h3>
                <p>Price: ${house.price.toLocaleString()}</p>
                <p>Bedrooms: {house.bedrooms}</p>
                <p>Bathrooms: {house.bathrooms}</p>
                <p>Living Area: {house.livingArea} sqft</p>
            </div>
        </div>
    );

    return (
        <div className="House-list">
            {houses.map((house) => renderHouse(house))}
        </div>
    );
};

export default HouseList;
