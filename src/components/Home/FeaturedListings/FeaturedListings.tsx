import "./FeaturedListings.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchFeaturedListings from "./FeaturedListingsApi";
import HouseAllDetailsButton from "../../HouseDetails/HouseAllDetailsButton";
import "../../HomeSlider/HomeSlider.css";
import Slider from "react-slick";
import Loading from "../../Loading";
import Eagan from "../../../assets/Eagan.jpg";
import Edina from "../../../assets/Edina.jpg";
import Minneapolis from "../../../assets/Minneapolis.jpg";
import StPaul from "../../../assets/StPaul.jpg";
import Bloomington from "../../../assets/Bloomington.jpg";
import right from "../../../assets/Right.png";
import left from "../../../assets/Left.png";

interface House {
  zpid: number;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  livingArea: string;
  propertyType: string;
}
const NextArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
     <img className='arrow' src={right} alt="right" ></img>
       
    </div>
  );
};

const PrevArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
    <img className='arrow' src={left} alt="left" ></img>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const FeaturedListings: React.FC = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const extractCityAndStateFromAddress = (address: string): string => {
    const cityAndStateRegex = /,\s*([^,]+,\s*\w{2})/;
    const cityAndStateMatch = address.match(cityAndStateRegex);
    return cityAndStateMatch ? cityAndStateMatch[1] : address;
  };

  function formatPropertyType(propertyType: string) {
    return propertyType
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const [data] = await fetchFeaturedListings();
      const houseData = data.map((house: any) => ({
        zpid: house.zpid,
        image: house.imgSrc,
        title: house.title,
        location: house.address,
        price: `$${house.price.toLocaleString()}`,
        bedrooms: house.bedrooms,
        bathrooms: house.bathrooms,
        livingArea: house.livingArea,
        propertyType: house.propertyType,
      }));
      setHouses(houseData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="LoadDiv2">
        <Loading />
      </div>
    );
  }

  return (
    <div className="FeaturedListings">
      <div className="FeaturedListings-grid">
        <div
          className="FeaturedListings-image"
          style={{ backgroundImage: `url(${Minneapolis})` }}
          role="img"
        >

          <h1 className="FeaturedListings-city">
            Minneapolis
          </h1>
          <p className="FeaturedListings-details-m">A vibrant Midwestern city renowned for its lakes, parks, arts scene, and the Mississippi River</p>
          <a href="/search?city=Minneapolis, MN" className="FeaturedListings-details-button" style={{ textDecoration: "none" }}>
            EXPLORE
          </a>
        </div>
        <div
          className="FeaturedListings-image"
          style={{ backgroundImage: `url(${StPaul})` }}
          role="img"
        >

          <h1 className="FeaturedListings-city">
            St.Paul
          </h1>
          <p className="FeaturedListings-details-s">The capital of Minnesota, is a city rich in history, featuring beautiful Victorian architecture, extensive parkland, and a diverse cultural scene</p>
          <a href="/search?city=Saint Paul, MN" className="FeaturedListings-details-button" style={{ textDecoration: "none" }}>
            EXPLORE
          </a>
        </div>
        <div
          className="FeaturedListings-image"
          style={{ backgroundImage: `url(${Eagan})` }}
          role="img"
        >

          <h1 className="FeaturedListings-city">
            Eagan
          </h1>
          <p className="FeaturedListings-details-ea">A family-friendly suburban city known for its extensive parks, recreational facilities, and convenient location near both Minneapolis and St. Paul</p>
          <a href="/search?city=Eagan, MN" className="FeaturedListings-details-button" style={{ textDecoration: "none" }}>
            EXPLORE
          </a>
        </div>
        <div
          className="FeaturedListings-image"
          style={{ backgroundImage: `url(${Bloomington})` }}
          role="img"
        >

          <h1 className="FeaturedListings-city">
            Bloomington
          </h1>
          <p className="FeaturedListings-details-b">A dynamic suburb of Minneapolis, best known for the Mall of America, a vast shopping and entertainment complex, and its natural beauty with many parks and wildlife reserves</p>
          <a href="/search?city=Bloomington, MN" className="FeaturedListings-details-button" style={{ textDecoration: "none" }}>
            EXPLORE
          </a>
        </div>
        <div
          className="FeaturedListings-image"
          style={{ backgroundImage: `url(${Edina})` }}
          role="img"
        >

          <h1 className="FeaturedListings-city">
            Edina
          </h1>
          <p className="FeaturedListings-details-ed">An affluent suburban city renowned for its high-end shopping and dining, top-rated schools, and lush parks and golf courses</p>
          <a href="/search?city=Edina, MN" className="FeaturedListings-details-button" style={{ textDecoration: "none" }}>
            EXPLORE
          </a>
        </div>
        <div className="FeaturedListings-title">
          <h1>
            <span className="FeaturedListings-title-featured">FEATURED </span>{" "}
            <span className="FeaturedListings-title-listings"> CITIES</span>
          </h1>
          <HouseAllDetailsButton>SEARCH OTHER CITIES</HouseAllDetailsButton>
        </div>
      </div>
      <div className="House-slider-title">Open</div>
      <hr className="House-slider-hr"></hr>
      <div className="House-slider-title2">Houses</div>

      <div className="HousesSlider">
        <Slider {...settings}>
          {houses.map((house) => (
            <div key={house.zpid} className="House-slider-item">
              <div className="House-slider-item-details">
                <Link to={`/house-details/${house.zpid}`}>View Details</Link>
              </div>
              <img src={house.image} alt={house.title} />
              <div className="House-slider-info">
                <h3 className="House-slider-price">{house.price}</h3>
                <p className="House-slider-location">
                  {extractCityAndStateFromAddress(house.location)}
                </p>
                <p className="House-slider-type">Type:</p>
                <p className="House-slider-detail House-slider-data">
                  {formatPropertyType(house.propertyType)}
                </p>
                <p className="House-slider-size">Size:</p>
                <p className="House-slider-detail House-slider-data">
                  {house.livingArea} sqft
                </p>
                <p className="House-slider-bedrooms">Rooms:</p>
                <p className="House-slider-detail House-slider-data">
                  {" "}
                  {house.bedrooms} Beds + {house.bathrooms} Baths
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedListings;
