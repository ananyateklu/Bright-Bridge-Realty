import React from "react";
import house from "../../assets/House1.jpg";
import house1 from "../../assets/streetimg.jpg";
import house2 from "../../assets/streetimg2.jpg";
import house3 from "../../assets/streetimg3.jpg";

function ImageSlider() {
  return (
    <div className="slideshow">
      <img src={house} className="fade" alt="house" /> 
      <img src={house1} className="fade" alt="house"/>
      <img src={house2} className="fade" alt="house"/>
      <img src={house3} className="fade" alt="house"/>
    </div>
  );
}

export default ImageSlider;
