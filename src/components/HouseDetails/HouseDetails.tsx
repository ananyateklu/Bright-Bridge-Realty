import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HouseDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Mortgage from '../Mortgage/Mortgage';
import Slider from "react-slick";
import up from "../../assets/Up.png";
import down from "../../assets/Down.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



interface RouteParams extends Record<string, string | undefined> {
  zpid: string;
}

interface House {
  zpid: string;
  miniCardPhotos: { url: string }[];
  address: any;
  price: number;
  bedrooms: number;
  bathrooms: number;
  livingArea: number;
  homeType: string;
}


const HouseDetails: React.FC = () => {
  const { zpid } = useParams<RouteParams>();
  const [houseData, setHouseData] = useState<any>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const [displayedImage, setDisplayedImage] = useState<string>('');

  const [similarHouse, setSimilarHouse] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Initialize loading state


  useEffect(() => {
    const fetchHouseDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://zillow-com1.p.rapidapi.com/property',
        params: { zpid },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      };
      const additionalImagesOptions = {
        method: 'GET',
        url: 'https://zillow-com1.p.rapidapi.com/images',
        params: { zpid },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      };

      const similarHouseOptions = {
        method: 'GET',
        url: 'https://zillow-com1.p.rapidapi.com/similarProperty',
        params: { zpid },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      };


      function wait(): Promise<void> {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000); // 3 seconds in milliseconds
        });
      }



      try {
        setLoading(true);
        const response = await axios.request(options);
        setHouseData(response.data);
        await wait();
        const additionalImagesResponse = await axios.request(additionalImagesOptions);
        setAdditionalImages(additionalImagesResponse.data.images);
        await wait();
        const similarHouseResponse = await axios.request(similarHouseOptions);
        if (similarHouseResponse.data && Array.isArray(similarHouseResponse.data)) {
          setSimilarHouse(similarHouseResponse.data);
        }
        setLoading(false);

      } catch (error) {
        console.error(error);
        setLoading(false); // Optionally, you may also set loading to false here to remove the loading screen even if there's an error
      }
    };

    fetchHouseDetails();
  }, [zpid]);

  useEffect(() => {
    if (additionalImages) {
      setDisplayedImage(additionalImages[0]);
    }
  }, [additionalImages]);

  const handleThumbnailClick = (image: string) => {
    setDisplayedImage(image);
  };

  if (loading) {
    return <div className='LoadDiv'><Loading /></div>;
  }
  const NextArrow: React.FC = (props: any) => {
    const { onClick } = props;
    return (
      <div className="next-arrow-details" onClick={onClick}>
        <div className='a-div'> <img className='arrow' src={up} alt="up" ></img>
        </div>
      </div>
    );
  };

  const PrevArrow: React.FC = (props: any) => {
    const { onClick } = props;
    return (
      <div className="prev-arrow-details" onClick={onClick}>
        <div className='a-div'><img className='arrow' src={down} alt="up" ></img>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };


  const renderHouse = (house: House) => (
    <div className="House-item house-item-del" key={house.zpid}>
      <div className="House-item-details house-view-detail"><Link to={`/house-details/${house.zpid}`}>View Details</Link>
      </div>
      <img
        src={house.miniCardPhotos?.[0]?.url ?? ''}
        alt="House"
        className="House-item-image"
      />
      <div className="House-item-info">
        <p className="House-item-price">${house.price.toLocaleString()}</p>
        <p className="House-item-city House-item-data">{house.address.city}, {house.address.state}</p>
        <p className="House-item-detail">Type:</p>
        <p className="House-item-detail House-item-data">{house.homeType}</p>
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
    <div className="House-details">
      <div className="side-bar">
        <div className="side-slider">
          <Slider {...settings}>
            {additionalImages.slice(0, 20).map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(image)}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="side-details">
          <a href="/search?city=Minneapolis, MN" className="view-more-listing-button" style={{ textDecoration: "none" }}>
            VIEW MORE LISTINGS
          </a>
          <div className="related-house">
            <div className="similar-header">Similar Properties</div>
            {Array.isArray(similarHouse) && similarHouse.slice(0, 2).map((house: House) => renderHouse(house))}
          </div>

        </div>
      </div>
      <div className="main">
        <div className="main-img">
          <img src={displayedImage} alt="House" />
        </div>
        <div className="property-info">
          <div className="property-info-address">
            <span className="label">Address</span>
            <span>{houseData.address.streetAddress}, {houseData.address.city}, {houseData.address.state}</span>
          </div>
          <div className="property-info-type">
            <span className="label">Home Type</span>
            <span>{houseData.homeType}</span>
          </div>
          <div className="property-info-price">
            <span className="label">Price</span>
            <span>${houseData.price}</span>
          </div>
        </div>
        <div className="property-header">
          <h2>Description</h2>
          <div className="header-details">
            for {houseData.address.streetAddress}, {houseData.address.city}, {houseData.address.state}, {houseData.address.zipcode}
          </div>
        </div>
        <div className="property-description">
          <span>{houseData.description}</span>
        </div>
        <div className="listing-info">
          <h2>Listing Information</h2>
        </div>
        <div className="listing-detail">
          <div className="listing-lists>">

            <div>Status: </div>
            <div>Bedrooms: {houseData.bedrooms}</div>
            <div>Bathrooms:{houseData.bathrooms}</div>
            <div>Lot Size: {houseData.bathrooms}</div>
            <div>Square Feet: {houseData.livingAreaValue} sqft</div>
            <div>Year Built: {houseData.yearBuilt}</div>
            <div>Foundation: {houseData.homeType}</div>
            <div>Garage:{houseData.hasGarage}</div>
            <div>Stories:</div>
            <div>Property Attached:</div>
            <div>Subdivision:</div>
            <div>County:</div>
            <div>Construction Status:</div>

          </div>
        </div>
        <div className="interior">
          <h2>Interior Features</h2>
        </div>
        <div className="interior-detail">
          <div className="interior-list">
            <div className="interior-name"> 3/4 Bath</div>
            <div className="interior-desc"> 1</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Above Grade Finished Area</div>
            <div className="interior-desc"> 2</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Bath Desc </div>
            <div className="interior-desc"> 3</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Below Grade Finished Area</div>
            <div className="interior-desc"> 4</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Dining Room Description</div>
            <div className="interior-desc"> 5</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Fireplace Features</div>
            <div className="interior-desc"> 6</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Fireplace Y/N</div>
            <div className="interior-desc"> 7</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Fuel</div>
            <div className="interior-desc"> 8</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Full Baths</div>
            <div className="interior-desc"> 9</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Garage Square Feet</div>
            <div className="interior-desc"> 10</div>
          </div>


        </div>
       <div>
       <a href="/mortgage" className="view-more-listing-button" style={{ textDecoration: "none" }}>
            Mortgage Calculator
          </a>
          
       </div>
      </div>


    </div>
  );
};

export default HouseDetails;