import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
      <nav className="headerMenu">
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <div className="socialMediaIconscon">
            <img src="https://image.flaticon.com/icons/svg/733/733547.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/733/733579.svg" alt=""/>
      </div>
    </header>
   )

 }

export default Header