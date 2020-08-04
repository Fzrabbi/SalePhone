import React from 'react'
import Card from '../UI/Card'
import './style.css';

/**
* @author
* @function Blogpost
**/

const Blogpost = (props) => {
  return(
    
      <div className="blogPostContainer">
        <Card>
          <div className="blogHeader">
          <span>Featured</span>
          <h1 className="postTitle">Sale The Used phone You like</h1>
          </div>

          <div className="postImageContainer">
            <img src={require('../../blogpostImages/18k-solid-gold-iphone-11-pro.jpg')}alt="Post Image"/>
          </div>
        </Card>
      </div>
    
   )

 }

export default Blogpost