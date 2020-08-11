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
        <li><NavLink to="/post/2">Posts</NavLink></li>
        <li><NavLink to="/Products">Products</NavLink></li>
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