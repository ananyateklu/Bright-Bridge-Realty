import React from 'react';
import house from '../../assets/House1.jpg';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    

    const handleSearch = (searchedCity: string) => {
        navigate(`/search?city=${searchedCity}`);
    };

    return (
        <div className="Home">
            <SearchBar onSearch={handleSearch} />
            <div className="House-container">
                <img src={house} className="House" alt="house" />
            </div>

        </div>
    );
};

export default Home;
