import React from 'react'
import './style.css';
import Card from '../../components/UI/Card';
import Blogpost from '../../components/Blogpost';
import Sidebar from '../../components/sidebar';
/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
    
    <section className="container">
     
      <Blogpost/>
      <Sidebar/>
      
    </section>
    
   )

 }

export default Post