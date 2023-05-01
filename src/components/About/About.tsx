import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="about-header">
        <h1>
          ABOUT <span>US</span>
        </h1>
        <p>
          BRIGHTBRIDGE REALTY is a professional real estate brokerage serving
          buyers and sellers of luxury property in Minnesota.
        </p>
      </div>
      <div className="agent-roster">
        <h2>Our Agents</h2>
        <div className="agents">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((_, index) => (
            <div className="agent" key={index}>
              <div className="agent-image">
                {/* Replace with actual agent image */}
                <img src="https://via.placeholder.com/150" alt="Agent" />
              </div>
              <div className="agent-info">
                <h3>Agent {index + 1}</h3>
                <p>Role: Real Estate Agent</p>
                <p>Email: agent{index + 1}@brightbridgerealty.com</p>
                <p>Phone: +123 456 78{index + 1}0</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
