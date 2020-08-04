import React from 'react'
import Card from '../UI/Card'
import './style.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
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
        <div className="recentPost">
          <h3>Post Title</h3>
          <span>july 04,2020</span>
        </div>

        <div className="recentPost">
          <h3>Post Title</h3>
          <span>jun 01,2020</span>
        </div>

        <div className="recentPost">
          <h3>Post Title</h3>
          <span>may 26,2020</span>
        </div>

      </div>
      </Card>
    </div> 
   )

 }

export default Sidebar