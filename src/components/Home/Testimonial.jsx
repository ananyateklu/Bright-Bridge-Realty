
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonial.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import quote from "../../assets/quote.png";
import user1 from "../../assets/user1.jpg";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Testimonial = () => {
   

    return (



<div>

      <div className="testimonial-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{ delay: 5000 }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
          <div className="test-main">
            <div className="testimonialBox Box1">
              <img src={quote} className="quote" alt=""></img>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus, dui vel rhoncus elementum, lorem velit posuere
                  nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum
                  suscipit, dapibus sapien a, dignissim elit. Sed odio felis,
                  condimentum nec augue at, iaculis feugiat massa. Duis a
                  sollicitudin ipsum, sed blandit magna.
                </p>
              </div>
              <div className="testimonial-details">
                <div className="imgBx">
                  <img src={user1} alt=""></img>
                </div>
                <h3>
                  Someone Famous
                  <br />
                  <span>Home Owner 3</span>
                </h3>
              </div>
            </div>
            <div className="test-divide">

            </div>
            <div className="testimonialBox Box2">
              <img src={quote} className="quote" alt=""></img>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus, dui vel rhoncus elementum, lorem velit posuere
                  nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum
                  suscipit, dapibus sapien a, dignissim elit. Sed odio felis,
                  condimentum nec augue at, iaculis feugiat massa. Duis a
                  sollicitudin ipsum, sed blandit magna.
                </p>
              </div>
              <div className="testimonial-details">
                <div className="imgBx">
                  <img src={user1} alt=""></img>
                </div>
                <h3>
                  Someone Famous
                  <br />
                  <span>Home Owner 3</span>
                </h3>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="test-main">
            <div className="testimonialBox Box1">
              <img src={quote} className="quote" alt=""></img>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus, dui vel rhoncus elementum, lorem velit posuere
                  nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum
                  suscipit, dapibus sapien a, dignissim elit. Sed odio felis,
                  condimentum nec augue at, iaculis feugiat massa. Duis a
                  sollicitudin ipsum, sed blandit magna.
                </p>
              </div>
              <div className="testimonial-details">
                <div className="imgBx">
                  <img src={user1} alt=""></img>
                </div>
                <h3>
                  Someone Famous
                  <br />
                  <span>Home Owner 3</span>
                </h3>
              </div>
            </div>
            <div className="test-divide">
                
            </div>
            <div className="testimonialBox Box2">
              <img src={quote} className="quote" alt=""></img>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus, dui vel rhoncus elementum, lorem velit posuere
                  nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum
                  suscipit, dapibus sapien a, dignissim elit. Sed odio felis,
                  condimentum nec augue at, iaculis feugiat massa. Duis a
                  sollicitudin ipsum, sed blandit magna.
                </p>
              </div>
              <div className="testimonial-details">
                <div className="imgBx">
                  <img src={user1} alt=""></img>
                </div>
                <h3>
                  Someone Famous
                  <br />
                  <span>Home Owner 3</span>
                </h3>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="test-main">
            <div className="testimonialBox Box1">
              <img src={quote} className="quote" alt=""></img>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus, dui vel rhoncus elementum, lorem velit posuere
                  nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum
                  suscipit, dapibus sapien a, dignissim elit. Sed odio felis,
                  condimentum nec augue at, iaculis feugiat massa. Duis a
                  sollicitudin ipsum, sed blandit magna.
                </p>
              </div>
              <div className="testimonial-details">
                <div className="imgBx">
                  <img src={user1} alt=""></img>
                </div>
                <h3>
                  Someone Famous
                  <br />
                  <span>Home Owner 3</span>
                </h3>
              </div>
            </div>
            <div className="test-divide">
                
            </div>
            <div className="testimonialBox Box2">
              <img src={quote} className="quote" alt=""></img>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  faucibus, dui vel rhoncus elementum, lorem velit posuere
                  nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum
                  suscipit, dapibus sapien a, dignissim elit. Sed odio felis,
                  condimentum nec augue at, iaculis feugiat massa. Duis a
                  sollicitudin ipsum, sed blandit magna.
                </p>
              </div>
              <div className="testimonial-details">
                <div className="imgBx">
                  <img src={user1} alt=""></img>
                </div>
                <h3>
                  Someone Famous
                  <br />
                  <span>Home Owner 3</span>
                </h3>
              </div>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
       );
    };
    
    
    export default Testimonial;