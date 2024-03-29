import React from 'react';
import './About.css';
import ted from '../../assets/Tedla.jpg';
import daniel from '../../assets/Daniel.jpg';
import mahilet from '../../assets/Mahilet.jpg';

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="about-header">
        <h1>
          <span>ABOUT US</span>
        </h1>
        <p>
          BRIGHTBRIDGE REALTY is a professional real estate brokerage serving
          buyers and sellers of property in Minnesota.
        </p>
      </div>
      <div className="agent-roster">
        <h2>Our Agents</h2>
        <div className="agents">
          <div className="agent">
            <div className="agent-image">
              <img src={ted} alt="Agent" />
            </div>
            <div className="agent-info">
              <h3>Tedla "Ted" Belayneh</h3>
              <p>Role: Broker/Realtor</p>
              <p>Email: ted@brightbridgerealty.com</p>
              <p>Phone: +1 (612) 999-0660</p>
            </div>
          </div>
          <div className="agent">
            <div className="agent-image">
              <img src={daniel} alt="Agent" />
            </div>
            <div className="agent-info">
              <h3>Daniel Lema</h3>
              <p>Role: Assistant Manager</p>
              <p>Email: daniel@brightbridgerealty.com</p>
              <p>Phone: +1 (612) 807-6545</p>
            </div>
          </div>
          <div className="agent">
            <div className="agent-image">
              <img src={mahilet} alt="Agent" />
            </div>
            <div className="agent-info">
              <h3>Mahilet Sayed</h3>
              <p>Role: Assistant Manager</p>
              <p>Email: mahilet@brightbridgerealty.com</p>
              <p>Phone: +1 (612) 205-7897</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
