import React from 'react';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import FeaturedListings from "./FeaturedListings/FeaturedListings";
import ImageSlider from './ImageSlider';



const Home: React.FC = () => {
    const navigate = useNavigate();
    

    const handleSearch = (searchedCity: string) => {
        navigate(`/search?city=${searchedCity}`);
    };

    return (
        <div className="Home">
            <div className="Slogan">The Bridge to Your Next Home</div>
            <SearchBar onSearch={handleSearch} />
            <div className="House-container">
            <ImageSlider />
            </div>
            <FeaturedListings />
        </div>
    );
};

export default Home;
