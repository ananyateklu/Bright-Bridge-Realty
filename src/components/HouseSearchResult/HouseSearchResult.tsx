import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';
import './HouseSearchResult.css';
import SearchBarList from '../SearchBar/SearchBarList';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { useSearchParams } from 'react-router-dom';



interface House {
    zpid: string;
    imgSrc: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    livingArea: number;
    propertyType: string;
}

const HouseSearchResult: React.FC = () => {
    const [houses, setHouses] = useState<House[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city') || '';
    const extractCityAndStateFromAddress = (address: string): string => {
        const cityAndStateRegex = /,\s*([^,]+,\s*\w{2})/;
        const cityAndStateMatch = address.match(cityAndStateRegex);
        return cityAndStateMatch ? cityAndStateMatch[1] : address;
    };


    useEffect(() => {
        console.log('UseeffectCity', city);
        if (city) {
            fetchData(city);
        }
    }, [city]);

    function formatPropertyType(propertyType: string) {
        return propertyType
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }


    async function fetchData(city: string) {
        setLoading(true); // Add this line
        try {
            const response = await api.get('propertyExtendedSearch', {
                params: { location: city },
            });
            console.log(response.data.props);
            setHouses(response.data.props);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false); 
    }

    if (loading) {
        return <div className='LoadDiv'><Loading /></div>;
    }

    const renderHouse = (house: House) => (
        <div className="House-item" key={house.zpid}>
            <div className="House-item-details"><Link to={`/house-details/${house.zpid}`}>View Details</Link>
            </div>
            <img src={house.imgSrc} alt="House" className="House-item-image" />
            <div className="House-item-info">
                <p className="House-item-price">${house.price.toLocaleString()}</p>
                <p className="House-item-city House-item-data">{extractCityAndStateFromAddress(house.address)}</p>
                <p className="House-item-detail">Type:</p>
                <p className="House-item-detail House-item-data">{formatPropertyType(house.propertyType)}</p>
                <p className="House-item-detail">Size:</p>
                <p className="House-item-detail House-item-data">{house.livingArea} sqft</p>
                <p className="House-item-detail">Rooms:</p>
                <p className="House-item-detail House-item-data">
                    {house.bedrooms} Beds + {house.bathrooms} Baths
                </p>
            </div>
            <hr className="House-item-divider" />
        </div>
    );

    return (
        <>
          <div className="Larger-search">
            <SearchBarList
              onSearch={(searchedCity: string) => {
                const newPath = `/search?city=${searchedCity}`;
                window.location.href = newPath;
              }}
            />
          </div>
    
          <div className="House-list">
            {houses.map((house) => renderHouse(house))}
          </div>
        </>
      );
    };

export default HouseSearchResult;
