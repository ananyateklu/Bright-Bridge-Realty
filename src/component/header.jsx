import React, { useState } from "react";
import "./components.css";
import { NavLink,Link} from "react-router-dom";

import { HashLink } from 'react-router-hash-link';


const logo = require("../assets/BrightBridgeLogo.png");


const Header = () => {
  

  

 

  


  return (
    <div className="head">
<div className="Deskhead">
      <div className="LogoDiv">
        <div className="logo-img">
          <img src={logo} alt="logo"/>
        </div>
        
      </div>

      <div className="LinkDiv">
        <ul>
          <li>
            <NavLink exact="true" className="linkoff" to="/">
            <HashLink smooth to="/#Home">
                HOME
            </HashLink>
            </NavLink>
          </li>

          <li>
            
              <NavLink className="linkoff"  to="#service">
              <HashLink smooth to="/#services">
                SEARCH
            </HashLink>
              </NavLink>
            
          </li>

          <li >
            <NavLink className="linkoff" to="/">
            <HashLink smooth to="/#ourcrew">
                LENDERS
            </HashLink>
            </NavLink>
          </li>
          <li >
            <NavLink  className="linkoff" to="/">
            <HashLink smooth to="/#testimonial">
              ABOUT US
              </HashLink>
            </NavLink>
          </li>
          <li>
            <NavLink className="linkoff" to="/contactUs">
              CONTACT US
            </NavLink>{" "}
          </li>
          
        </ul>
      </div>
      </div>

     
        
       
      
    </div>
  );
};

export default Header;
