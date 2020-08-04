import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';


/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
      
      <div className="hero" style={{padding: '50px 0'}}>
          <Logo/>
          </div>
          <div className="hero">
          <Navbar/>
       </div>
       
        
      
       
    </div>
   )

 }

export default Hero