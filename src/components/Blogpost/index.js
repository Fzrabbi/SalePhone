import React, {useState,useEffect}from 'react'
import Card from '../UI/Card'
import './style.css';
import blogPost from '../../data/blog.json';
import Comment from '../comment';

/**
* @author
* @function Blogpost
**/

const Blogpost = (props) => {
  const[post, setPost]=useState({
            id: "",
            blogCategory:"" ,
            blogTitle : "",
            slug:"" ,
            postedOn: "",
            author: "",
            blogImage: "",
            blogText:"" 
        
  });
  const[postid,setPostId]=useState('');
    useEffect(()=>{
      const postId=props.match.params.postId;
      const post= blogPost.data.find(post=>post.id==postId);
      setPost(post);
      setPostId(postId);
    },[post,props.match.params.postId]);

    if(post.blogImage=="")return null;
  return( 
    
      <div className="blogPostContainer">
        <Card>
          <div className="blogHeader">
            <span>Featured</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">{post.author},{post.postedOn}</span>
          </div>

          <div className="postImageContainer">
            <img src={require('../../blogpostImages/'+post.blogImage)}alt="Post Image"/>
          </div>

          <div className="postContent">
            <span>{post.blogText}</span>
          </div>
        </Card>
        <Comment/>
      </div>
      
   )

 }

export default Blogpost