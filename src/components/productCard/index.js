import React from 'react'
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function ProductCard
**/

const ProductCard = (props) => {
  return(
     <div className='productcard'>
        <div className="grow">
            <Card className='cardclass'>    
                <div className="productImageContainer">
                    <img src= "https://phonesellbd.com/wp-content/uploads/2020/07/realme-x50-1.jpg"alt="Post Image"/>
                </div>

                <span>
                    Realme X50 6GB 64GB
                </span>
                <p>
                <a>
                    $480
                </a>
                </p>
            </Card>
        </div>
    </div>
    
   )

 }

export default ProductCard