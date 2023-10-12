import React from 'react';
import '../../../src/Styles/AboutUs.css'
import AboutUs from '../../../src/Images/about_us.png';


    const InfoContainer = () => 
    {
  return (
    
    <div >
         <img src={AboutUs} className='aboutusimage' alt="" />
         <div className="info-container">
      <h1 style={{color: "green"}}>About Us</h1><br></br>
      <p>
      "EchoWasteXchange is a platform that facilitates a unique marketplace where sellers can list their products for sale, <br></br>and vendors have the opportunity to purchase these items.<br></br>
       Additionally, vendors can further contribute to sustainability by offering <br></br>repair, refurbishment, and repurposing services.<br></br>
        This ecosystem promotes a circular economy, where products <br></br>are given a second life and contribute to reducing waste while creating economic value."

      </p>
      </div>
    </div>
  );
}
export default InfoContainer;