import React, {useState,useEffect} from 'react'
import Card from '../UI/Card'
import './style.css';
import { NavLink } from 'react-router-dom';
import blogPost from '../../data/blog.json';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts, setPosts]=useState([]);
    useEffect(()=>{
      const posts= blogPost.data;
      setPosts(posts);
    },posts);

  return(    
      
    <div className="sidebarContainer" >
      <Card style={{marginBottom:'20px', padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us </span>
        </div>
        <div className="aboutusimagecontainer">
          <img src="https://image.freepik.com/free-vector/online-shop-icon-mobile-smart-phone-with-screen-sell-buy_78681-182.jpg" alt=""/>
        <span>
          SalePhone is the leading reCommerce company that buys pre-owned consumer electronics. We provide our customers with simple selling options by purchasing their used smartphones, tablets and more. We then inspect, certify and sell them to consumers looking for a cost-effective way to stay connected. SalePhone is simple, convenient and it works for everyone.
        </span>
        </div>
        
      </Card>
      <Card style={{marginBottom:'20px', padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>

        
        <div className="socialMediaIconscontainer">
            <img src="https://image.flaticon.com/icons/svg/733/733547.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/733/733579.svg" alt=""/>
        </div>
        

      </Card>
      
      <Card style={{marginBottom:'20px', padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
          <span>Recent Posts </span>
      </div>

      <div className="recentPost">
        {
          posts.map(post=>{
            return(
              <NavLink to={`/post/${post.id}`}>
                <div className="recentPost" >
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>

            );
          })
        }


        
      </div>
      </Card>
    </div> 
   )

 }

export default Sidebar