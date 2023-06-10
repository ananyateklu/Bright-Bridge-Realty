import React from 'react';
import logo from './../assets/FooterLogo.png'
import equal from './../assets/Equal.png';
import mls from './../assets/MLS.png';


const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>brightbridgeone@gmail.com</p>
        <p>7900 International Drive</p>
        <p>Suite 300</p>
        <p>Bloomington, MN 55425</p>
        <p>Contact our office at</p>
        <p>+1 (612) 999-0660</p>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          {/* Add the links as needed */}
          <a href="/">Home</a>
          <a href="/search?city=Minneapolis, MN">Search</a>
          <a href='/sold'>Sold Listings</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-disclaimer">
          <h3> MLS Disclaimer</h3>
          <p>
            This website displays property information and data from multiple
            listing services (MLS). The information is provided 'as is' and
            without warranty of any kind, either express or implied. All
            information should be independently reviewed and verified for
            accuracy. The data relating to real estate for sale on this website
            comes in part from the Internet Data Exchange (IDX) program of the
            relevant MLS. Real estate listings held by brokerage firms other
            than BrightBridge Realty are marked with the MLS logo and detailed
            information about them includes the name of the listing brokers.
          </p>
          <p>
            The property data and information displayed on this website is
            provided through the Zillow API, and BrightBridge Realty is not
            responsible for the accuracy, completeness, or timeliness of this
            data. Users of this website are encouraged to confirm all property
            information with the appropriate professionals, including Realtors
            and/or MLS providers, prior to making any decisions based on such
            information. BrightBridge Realty and its agents are not
            responsible for any errors, omissions, or inaccuracies in the data
            displayed.
          </p>
          <img src={equal} style={{width: "50px", marginTop: "10px"}} alt="Equal Housing Opportunity" />
          <img src={mls} style={{width: "150px", marginTop: "10px"}} alt="MLS" />
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} BrightBridge Realty. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
