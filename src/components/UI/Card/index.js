import React from 'react';
import './style.css';
import Logo from '../../Logo';
import Navbar from '../../Navbar';
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card"{...props}>
      {props.children}
 
    </div>
    
    
   )

 }

export default Card