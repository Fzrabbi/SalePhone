import React from 'react';
import './style.css';
import Card from '../../components/UI/Card'
import Header from '../../components/Header';
import Sidebar from '../../components/sidebar';
const Home = props => {
    return(
        <section className="homeContainer">
            <div className="homeblogPostContainer">
                <Card >
                <div className="homeblogHeader">
                <span>Featured</span>
                <h1 className="homepostTitle">Sale The Used phone You like</h1>
                </div>

                <div className="homepostImageContainer">
                    <img src={require('../../blogpostImages/18k-solid-gold-iphone-11-pro.jpg')}alt="Post Image"/>
                    <div>
                    <span>The first custom iPhone X models were revealed today with prices ranging from $7.5k to $70k. These are no ordinary iPhone units, of course, they’re made with custom exteriors made from varied amounts of precious materials, all from the company called Brikk. Some are made with gold, some feature diamond inlays, and all come packaged in a custom aluminum case lined with carbon fiber and leather.To be entirely clear, here: it’s unlikely the folks at Brikk have access to finalized straight-from-Apple models of the smartphone yet. It’s also unlikely that the renderings they’re working with here are 100% accurate. What they likely DO have is a good enough idea of what it’ll cost them to create these customized designs. They have enough information to make the models you see here.</span>
                    </div>
                    <img src={require('../../blogpostImages/xiaomi_redmi_note_9s.jpg')}alt="Post Image"/>
                    <div>
                    <span>Featuring an impressive quad-camera setup in the rear, Redmi Note 9 Pro’s 64MP main lens captures crisp, ultra-high resolution images in all lighting conditions while its 8MP ultra wide -angle lens enables stunning large group images without compromise. A 5MP macro lens and 2MP depth sensor round out the rear camera, letting users take stunning close-up shots with fantastic bokeh. On the front, Redmi Note 9 Pro sports a 16MP in-display camera for high-quality selfies. Its new slow motion selfie mode captures hilarious slow-motion videos — perfect for social media.</span>
                    </div>
                    <img src={require('../../blogpostImages/Xiaomi-Redmi-9-Official-image.jpg')}alt="Post Image"/>
                    <div>
                    <span>Redmi Note series has been offering some of the most incredible mid-range smartphones on the market, with over 110 million1 Redmi Note units sold across the globe. Together with the recently launched Redmi Note 9S, the new Redmi Note smartphone lineup continues to flaunt cutting edge design and innovation without the flagship price point.</span>
                    </div>
                </div>
                </Card>
                
            </div>
        </section>
    );
}
export default Home;