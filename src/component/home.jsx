
import { useRef, useEffect, useState, React } from "react";

import { Link } from "react-router-dom";

const hero_img = require("../assets/hero_house.jpg");








// Import Swiper styles



const Home = () => {
  

  return (
    <div className="Home" id="Home">
      
      <div className="hero">
      <div className="hero-img">
          <img src={hero_img} alt="hero-img"/>
        </div>
      </div>
      
      
      
    

      
     
    </div>
  );
};

export default Home;
