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
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [houses, setHouses] = useState<House[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city') || '';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';
    const bedsMin = searchParams.get('bedsMin') || '';
    const bedsMax = searchParams.get('bedsMax') || '';
    const bathsMin = searchParams.get('bathsMin') || '';
    const bathsMax = searchParams.get('bathsMax') || '';
    const home_type = searchParams.get('home_type') || '';
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMorePages, setHasMorePages] = useState<boolean>(true);
    const [filterValues, setFilterValues] = useState({
        location: city,
        minPrice: minPrice,
        maxPrice: maxPrice,
        bedsMin: bedsMin,
        bedsMax: bedsMax,
        bathsMin: bathsMin,
        bathsMax: bathsMax,
        home_type: home_type,
    });

    const extractCityAndStateFromAddress = (address: string): string => {
        const cityAndStateRegex = /,\s*([^,]+,\s*\w{2})/;
        const cityAndStateMatch = address.match(cityAndStateRegex);
        return cityAndStateMatch ? cityAndStateMatch[1] : address;
    };


    useEffect(() => {
        if (city) {

            fetchData(city, minPrice, maxPrice, bedsMin, bedsMax, bathsMin, bathsMax, home_type, currentPage);
        }
    }, [city, minPrice, maxPrice, bedsMin, bedsMax, bathsMin, bathsMax, home_type, currentPage]);

    function formatPropertyType(propertyType: string) {
        return propertyType
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }


    async function fetchData(
        city: string,
        minPrice: string,
        maxPrice: string,
        bedsMin: string,
        bedsMax: string,
        bathsMin: string,
        bathsMax: string,
        home_type: string,
        page: number
    ) {
        setLoading(true);
        setErrorMessage('');
        try {
            const params: any = {
                location: city,
                home_type: home_type,
            };

            if (minPrice) params.minPrice = minPrice;
            if (maxPrice) params.maxPrice = maxPrice;
            if (bedsMin) params.bedsMin = bedsMin;
            if (bedsMax) params.bedsMax = bedsMax;
            if (bathsMin) params.bathsMin = bathsMin;
            if (bathsMax) params.bathsMax = bathsMax;
            if (page) params.page = page;

            const response = await api.get("propertyExtendedSearch", {
                params: params,
            });
          // Check if there are more pages
            setHasMorePages((response.data.totalPages - response.data.currentPage) > 0);
            // Check if there are no results
            if (response.data.props === undefined || response.data.props.length === 0) {
                setErrorMessage('No results found for the given search criteria.');
            } else {
                setHouses(response.data.props);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage('An error occurred while fetching data. Please try again.');
        }
        setLoading(false);
    }

    // Create a function to handle page change
    function handlePageChange(newPage: number) {
        setCurrentPage(newPage);
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
                    initialValues={filterValues}
                    onSearch={(filters) => {
                        const {
                            location,
                            minPrice,
                            maxPrice,
                            bedsMin,
                            bedsMax,
                            bathsMin,
                            bathsMax,
                            home_type,
                        } = filters;

                        // Update the filter values in the state
                        setFilterValues({
                            location,
                            minPrice,
                            maxPrice,
                            bedsMin,
                            bedsMax,
                            bathsMin,
                            bathsMax,
                            home_type,
                        });

                        const newPath = `/search?city=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&bedsMin=${bedsMin}&bedsMax=${bedsMax}&bathsMin=${bathsMin}&bathsMax=${bathsMax}&home_type=${home_type}`;
                        window.location.href = newPath;
                    }}
                />
            </div>
            {errorMessage ? (
                <div className="No-results-message">
                    <div className="No-results-message-header">
                        <p>{errorMessage}</p>
                    </div>

                </div>
            ) : (
                <div className="House-list">
                    {houses.map((house) => renderHouse(house))}
                    <div className="pagination-container">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span>Page {currentPage}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={!hasMorePages}>Next</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default HouseSearchResult;
