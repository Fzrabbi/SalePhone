import React from 'react'
import './style.css';
import Card from '../UI/Card';
/**
* @author
* @function Comment
**/

const Comment = (props) => {
  return(
    <div>
        <div className='commentbox'>
            <Card>
                <div>All Comments</div>
            </Card>
        </div>
        <div className='makecomment'>
            <Card>
                <div>Make Comment</div>
            </Card>
        </div>
        <div className='commentSubmit'>
        <Card >
                <input className="commentinput" type="text"  placeholder="comment"/>
                <img className="submitchIcon" src={require('../../assets/icons/submit.png')}alt="Submit"/>
        </Card>
        </div>
    </div>
   )

 }

export default Comment