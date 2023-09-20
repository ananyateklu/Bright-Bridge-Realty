import React, { useState, useEffect } from 'react';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import FeaturedListings from "./FeaturedListings/FeaturedListings";
import ImageSlider from './ImageSlider';
import Testimonial from "./Testimonial";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000); // Initialize with current window width

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        // Add event listener for window resizing
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const handleSearch = (searchedCity: string) => {
        navigate(`/search?city=${searchedCity}`);
    };

    return (
        <div className="Home">
            {!isMobile && <div className="Slogan">The Bridge to Your Next Home</div>}
            {isMobile && <div className="SloganMobile">Find Your Next Home</div>}
            {!isMobile && <SearchBar onSearch={handleSearch} />}
            {isMobile && <SearchBar onSearch={handleSearch} />}
            <div className="House-container">
                {/* Render ImageSlider only if it's not a mobile view */}
                {!isMobile && <ImageSlider />}
            </div>
            <FeaturedListings />
            <div className="Testimonial-header">
                <div className="Testimonial-slider-title">OUR CLIENTS ARE IMPORTANT TO US</div>
                <hr className="Testimonial-slider-hr"></hr>
                <div className="Testimonial-slider-title2">HERE IS WHAT THEY HAVE TO SAY</div>
            </div>
            <Testimonial />
        </div>
    );
};

export default Home;
