import React from 'react'
import './style.css';
/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
      <div className="logoimage">
          <img src={require('../../blogpostImages/phone.png')}alt="Post Image"/>
      </div>
      <a href="#">SalePhone</a>
        
    </div>
   )

 }

export default Logo