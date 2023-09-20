import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HouseDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Mortgage from '../Mortgage/Mortgage';
import ContactFormTop from '../Contact/ContactFormTop';
import ContactForm from '../Contact/ContactForm';
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
  const [showContactForm, setShowContactForm] = useState(false);
  const [showMortgageCalculator, setShowMortgageCalculator] = useState(false);
  const [showMortgageButton, setShowMortgageButton] = useState(true);
  const [housePrice, setHousePrice] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000); // Initialize with current window width

  const handleContactSubmit = () => {
    setShowContactForm(false);
    setShowMortgageCalculator(true);
  };

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'smooth' });


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
          }, 1000); // 1 seconds in milliseconds
        });
      }

      try {
        setLoading(true);
        const response = await axios.request(options);
        setHouseData(response.data);
        setHousePrice(response.data.price);
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

  useEffect(() => {
    if (additionalImages) {
      setDisplayedImage(additionalImages[0]);
    }
  }, [additionalImages]);

  const handleThumbnailClick = (image: string) => {
    setDisplayedImage(image);
  };

  function formatPropertyTypeAndStatus(propertyType: string) {
    return propertyType
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat('en-US').format(price);
  }


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
    responsive: [
      {
        breakpoint: 1000, // up to 1000px screen width
        settings: {
          vertical: false,
        },

      }
    ]
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
        <p className="House-item-detail House-item-data">{formatPropertyTypeAndStatus(house.homeType)}</p>
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
     {!isMobile &&<div className="side-bar">
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
      </div>}
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
            <span>{formatPropertyTypeAndStatus(houseData.homeType)}</span>
          </div>
          <div className="property-info-price">
            <span className="label">Price</span>
            <span>${formatPrice(houseData.price)}</span>
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
        <div className="list-and-contact">
          <div className="grid-one-detail">
            <div className="listing-info">
              <h2>Listing Information</h2>
            </div>
            <div className="listing-detail">
              <div className="listing-lists>">
                <div>MLS ID: {houseData.mlsid ? houseData.mlsid : 'No Data Found'}</div>
                <div>Status: {houseData.homeStatus ? formatPropertyTypeAndStatus(houseData.homeStatus) : 'No Data Found'} </div>
                <div>Bedrooms: {houseData.bedrooms ? houseData.bedrooms : 'No Data Found'}</div>
                <div>Bathrooms: {houseData.bathrooms ? houseData.bathrooms : 'No Data Found'}</div>
                <div>Lot Size: {houseData.resoFacts.lotSize ? houseData.resoFacts.lotSize : 'No Data Found'}</div>
                <div>Living Area: {houseData.resoFacts.livingArea ? houseData.resoFacts.livingArea : 'No Data Found'}</div>
                <div>Sewer: {houseData.resoFacts.sewer ? houseData.resoFacts.sewer : 'No Data Found'}</div>
                <div>Year Built: {houseData.yearBuilt ? houseData.yearBuilt : 'No Data Found'}</div>
                <div>Home Type: {houseData.homeType ? formatPropertyTypeAndStatus(houseData.homeType) : 'No Data Found'}</div>
                <div>Garage Spaces: {houseData.resoFacts.garageSpaces ? houseData.resoFacts.garageSpaces : 'No Data Found'}</div>
                <div>Stories: {houseData.resoFacts.stories ? houseData.resoFacts.stories : 'No Data Found'} </div>
                <div>Foundation Area: {houseData.resoFacts.foundationArea ? houseData.resoFacts.foundationArea : 'No Data Found'}</div>
                <div>County: {houseData.county ? houseData.county : 'No Data Found'}</div>
                <div>Brokerage Name: {houseData.brokerageName ? houseData.brokerageName : 'No Data Found'}</div>
              </div>
            </div>
          </div>
          <div className="grid-two-detail">
            <div className="contact-form">
              <div className="listing-info">
                <h2>Contact Us</h2>
              </div>
              <ContactFormTop onContactSubmit={handleContactSubmit} />
            </div>
          </div>
        </div>
        <div className="interior">
          <h2>Interior Features</h2>
        </div>
        <div className="interior-detail">
          <div className="interior-list">
            <div className="interior-name">Full Bathrooms</div>
            <div className="interior-desc"> {houseData.resoFacts.bathroomsFull ? houseData.resoFacts.bathroomsFull : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name">Half Bathrooms</div>
            <div className="interior-desc"> {houseData.resoFacts.bathroomsHalf ? houseData.resoFacts.bathroomsHalf : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name">3/4 Bathrooms </div>
            <div className="interior-desc"> {houseData.resoFacts.bathroomsThreeQuarter ? houseData.resoFacts.bathroomsThreeQuarter : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Below Grade Finished Area</div>
            <div className="interior-desc"> {houseData.resoFacts.belowGradeFinishedArea ? houseData.resoFacts.belowGradeFinishedArea : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Above Grade Finished Area</div>
            <div className="interior-desc"> {houseData.resoFacts.aboveGradeFinishedArea ? houseData.resoFacts.aboveGradeFinishedArea : 'No Data Found'} </div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Fireplace Features</div>
            <div className="interior-desc"> {houseData.resoFacts.fireplaceFeatures ? houseData.resoFacts.fireplaceFeatures + ", " : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Accessibility Features</div>
            <div className="interior-desc"> {houseData.resoFacts.accessibilityFeatures ? houseData.resoFacts.accessibilityFeatures : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Basement Description</div>
            <div className="interior-desc"> {houseData.resoFacts.basement ? houseData.resoFacts.basement : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Cooling</div>
            <div className="interior-desc"> {houseData.resoFacts.cooling ? houseData.resoFacts.cooling : 'No Data Found'}</div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Electric</div>
            <div className="interior-desc"> {houseData.resoFacts.electric ? houseData.resoFacts.electric + ", " : 'No Data Found'} </div>
          </div>
          <div className="interior-list">
            <div className="interior-name"> Gas</div>
            <div className="interior-desc"> {houseData.resoFacts.gas ? houseData.resoFacts.gas + ", " : 'No Data Found'} </div>
          </div>
        </div>
        <div>
          {showMortgageButton && <button
            className="view-more-listing-button" style={{ textDecoration: "none" }}
            onClick={() => {
              setShowContactForm(true);
              setShowMortgageCalculator(false);
              setShowMortgageButton(false);
            }}
          >
            Calculate Mortgage
          </button>}

        </div>
        {showContactForm && <ContactForm onContactSubmit={handleContactSubmit} />}
        {showMortgageCalculator && <Mortgage housePrice={housePrice} />}
      </div>


    </div>
  );
};

export default HouseDetails;