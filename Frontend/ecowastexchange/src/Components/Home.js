import React from 'react'
import Navbar from './Navbar'
import './Home.css';
import BannerBackground from "../Images/home-banner-background.png";
import BannerImage from "../Images/home-banner-image.png";
import BackgroundImage from "../Images/background.jpg";


const Home = () => {
    return (
      <div className='mainpage' >
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
            "Reduce, Reuse, Recycle!"
            </h1>
            <p className="primary-text">
            "Don't trash it, recycle your e-waste and make a difference!"
            </p>
            </div>
            <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
