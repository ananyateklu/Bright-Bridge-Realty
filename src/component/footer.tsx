import React from 'react'
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'


const logo_inv = require("../assets/BrightBridgeLogoInverted.png")
const footer = () => {
  return (
    <div className='FooterDiv'>
      <div className='FooterLeft'>
      <div className="LogoDiv">
        <div className="logo-img">
          <img src={logo_inv} alt="logo"/>
        </div>
        
      </div>
        <h5>PHONE    +1(301) 433-1934</h5>
        <h5>EMAIL  Queenhabesha@gmail.com</h5>
        <h5>LOCATION   2917 Cliff Rd East Burnsville MN 55337 </h5>
        <ul>
          <li className='BookingButtonDark'>Book Appointment</li>
        </ul>
      </div>

      <div className='Links'>
        <ul>
          <li><Link to="/"><HashLink smooth to="/#Home">
                HOME
            </HashLink></Link></li>
          <li><Link to="/"><HashLink smooth to="/#services">
                SERVICES
            </HashLink></Link></li>
          <li><Link to="/"><HashLink smooth to="/#ourcrew">
                OUR CREW
            </HashLink></Link></li>
          <li><Link to="/"><HashLink smooth to="/#testimonial">
                TESTIMONIAL
            </HashLink></Link></li>
          <li><Link to="/contactus">CONTACT US</Link></li>
        </ul>
      </div>


    </div>
  )
}

export default footer