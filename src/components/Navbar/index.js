import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  
  const submitSearch=(e)=>{
    e.preventDefault();
    alert('Searhead');
  }

  
  
  return(
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact-us">Contact</NavLink></li>
        <li><NavLink to="/">Gallery</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/about-us">About</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input className="searchInput" type="text"  placeholder="Search"/>
          <img className="searchIcon" src={require('../../assets/icons/search-32.png')}alt="Search"/>
        </form>
      </div>
    </div>
   )

 }

export default Navbar