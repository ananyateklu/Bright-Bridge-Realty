import './FeaturedListings.css';
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fetchFeaturedListings from './FeaturedListingsApi';
import HouseDetailsButton from '../../HouseDetails/HouseDetailsButton';
import HouseAllDetailsButton from '../../HouseDetails/HouseAllDetailsButton';
import '../../HomeSlider/HomeSlider.css'
import Slider from 'react-slick';
import Loading from '../../Loading';

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
  return <div className="next-arrow" onClick={onClick}>&gt;</div>;
};

const PrevArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return <div className="prev-arrow" onClick={onClick}>&lt;</div>;
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const FeaturedListings: React.FC = () => {
  const [featuredImages, setFeaturedImages] = useState<string[]>([]);
  const [listingData, setListingData] = useState<any[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const extractCityAndStateFromAddress = (address: string): string => {
    const cityAndStateRegex = /,\s*([^,]+,\s*\w{2})/;
    const cityAndStateMatch = address.match(cityAndStateRegex);
    return cityAndStateMatch ? cityAndStateMatch[1] : address;
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const [images, data, data2] = await fetchFeaturedListings();
      setFeaturedImages(images);
      const houseData = data2.map((house: any) => ({
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
      setListingData(data);
      setHouses(houseData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='LoadDiv2'><Loading /></div>;
  }


  return (
    <div className="FeaturedListings">
      <div className="FeaturedListings-grid">
        {featuredImages.map((image, index) => (
          <div
            key={index}
            className="FeaturedListings-image"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={`Featured listing ${index + 1}`}
          >
            {listingData[index] && (
              <>
                <h3 className="FeaturedListings-price">$ {listingData[index].price}</h3>
                <p className="FeaturedListings-address">{extractCityAndStateFromAddress(listingData[index].address)}</p>
                <HouseDetailsButton zpid={listingData[index].zpid}>View Details</HouseDetailsButton>
              </>
            )}
          </div>
        ))}
        <div className="FeaturedListings-title">
          <h1>
            <span className="FeaturedListings-title-featured">FEATURED</span>{' '}
            <span className="FeaturedListings-title-listings">LISTINGS</span>
          </h1>
          <HouseAllDetailsButton>VIEW ALL PROPERTIES</HouseAllDetailsButton>
        </div>
      </div>
      <div className='House-slider-title'>Open</div>
      <hr className='House-slider-hr'></hr>
      <div className='House-slider-title2'>Houses</div>
      
      <div className="HousesSlider">
        <Slider {...settings}>
          {houses.map((house) => (
            <div key={house.zpid} className="House-slider-item">
              <img src={house.image} alt={house.title} />
              <div className="House-slider-info">

                <h3 className="House-slider-price" >{house.price}</h3>

                <p className='House-slider-location'>{house.location}</p>
                <p className="House-slider-size">Size:</p>
                <p className="House-slider-detail House-slider-data">{house.livingArea} sqft</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedListings;
