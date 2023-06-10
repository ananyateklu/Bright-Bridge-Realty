import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import quote from "../../assets/quote.png";
import rowo from "../../assets/ROWO.png";
import fwda from "../../assets/FWDA.png";
import dyl from "../../assets/DYL.png";
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
          autoplay={{ delay: 8000 }}
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
                    Our agent was Tedla, he was very knowledgeable of the
                    current market trends. He was very helpful and
                    straightforward with us on the sale of our home in which he
                    didn't make a dime and help us purchase a beautiful home. He
                    is a professional in every aspect of the real estate
                    business. He would respond quickly if we sent him a text
                    message or called him. Top notch customer service! Would
                    definitely use BrightBridge Realty in the future and have
                    Tedla as our agent.
                  </p>
                </div>
                <div className="testimonial-details">
                  <div className="imgBx">
                    <img src={fwda} alt=""></img>
                  </div>
                  <h3>
                    Fikerte W & Daniel A
                    <br />
                    <span>
                      {" "}
                      He is a professional in every aspect of the real estate
                      business
                    </span>
                  </h3>
                </div>
              </div>
              <div className="test-divide"></div>
              <div className="testimonialBox Box2">
                <img src={quote} className="quote" alt=""></img>
                <div className="content">
                  <p>
                    Ted Belayneh is the perfect balance between tough and
                    charming. When you're making a big financial, personal and
                    sometimes emotional decision, you want someone who will be a
                    good listener, a strong negotiator and who is respected by
                    his/her peers. Ted meets all expectations. We have worked
                    with him three times. He was a great coach when we were
                    first time homebuyers and a savvy marketer when we sold that
                    home and bought a great house last year.
                  </p>
                </div>
                <div className="testimonial-details">
                  <div className="imgBx">
                    <img src={rowo} alt=""></img>
                  </div>
                  <h3>
                    Ruth O & Wilson O
                    <br />
                    <span>Ted meets all expectations</span>
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
                    Throughout the purchase processes I felt Tedla to be very
                    pleasant, knowledgeable, trustworthy, and responsive. I have
                    and would confidently recommend Tedla and BrightBridge
                    Broker to family and friends, and plan to work with him
                    again in the future!
                  </p>
                </div>
                <div className="testimonial-details">
                  <div className="imgBx">
                    <img src={dyl} alt=""></img>
                  </div>
                  <h3>
                    Daniel Y. L
                    <br />
                    <span>
                      {" "}
                      He is a professional in every aspect of the real estate
                      business
                    </span>
                  </h3>
                </div>
              </div>
              <div className="test-divide"></div>
              <div className="testimonialBox Box2">
                <img src={quote} className="quote" alt=""></img>
                <div className="content">
                  <p>
                    Ted Belayneh is the perfect balance between tough and
                    charming. When you're making a big financial, personal and
                    sometimes emotional decision, you want someone who will be a
                    good listener, a strong negotiator and who is respected by
                    his/her peers. Ted meets all expectations. We have worked
                    with him three times. He was a great coach when we were
                    first time homebuyers and a savvy marketer when we sold that
                    home and bought a great house last year.
                  </p>
                </div>
                <div className="testimonial-details">
                  <div className="imgBx">
                    <img src={rowo} alt=""></img>
                  </div>
                  <h3>
                    Ruth O & Wilson O
                    <br />
                    <span>Ted meets all expectations</span>
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
                    Our agent was Tedla, he was very knowledgeable of the
                    current market trends. He was very helpful and
                    straightforward with us on the sale of our home in which he
                    didn't make a dime and help us purchase a beautiful home. He
                    is a professional in every aspect of the real estate
                    business. He would respond quickly if we sent him a text
                    message or called him. Top notch customer service! Would
                    definitely use BrightBridge Realty in the future and have
                    Tedla as our agent.
                  </p>
                </div>
                <div className="testimonial-details">
                  <div className="imgBx">
                    <img src={fwda} alt=""></img>
                  </div>
                  <h3>
                    Fikerte W & Daniel A
                    <br />
                    <span>
                      {" "}
                      He is a professional in every aspect of the real estate
                      business
                    </span>
                  </h3>
                </div>
              </div>
              <div className="test-divide"></div>
              <div className="testimonialBox Box2">
                <img src={quote} className="quote" alt=""></img>
                <div className="content">
                  <p>
                    Ted Belayneh is the perfect balance between tough and
                    charming. When you're making a big financial, personal and
                    sometimes emotional decision, you want someone who will be a
                    good listener, a strong negotiator and who is respected by
                    his/her peers. Ted meets all expectations. We have worked
                    with him three times. He was a great coach when we were
                    first time homebuyers and a savvy marketer when we sold that
                    home and bought a great house last year.
                  </p>
                </div>
                <div className="testimonial-details">
                  <div className="imgBx">
                    <img src={rowo} alt=""></img>
                  </div>
                  <h3>
                    Ruth O & Wilson O
                    <br />
                    <span>Ted meets all expectations</span>
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
