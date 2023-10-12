import React from 'react';
import '../../../src/Styles/AboutUs.css'
import AboutUs from '../../../src/Images/about_us.png';


    const InfoContainer = () => 
    {
  return (
    
    <div >
      <h1 className='aboutus-heading' style={{color: "green"}}>About Us</h1><br></br>
         <img src={AboutUs} className='aboutusimage' alt="" />
         
         <div className="info-container">
      <p>
      "EchoWasteXchange is a platform that facilitates a unique marketplace where <br></br>sellers can list their products for sale, and vendors have the opportunity <br></br>to purchase these items.<br></br>
       Additionally, vendors can further contribute to sustainability by offering <br></br>repair, refurbishment, and repurposing services.<br></br>
        This ecosystem promotes a circular economy, where products <br></br>are given a second life and contribute to reducing waste while creating economic value."

      </p>
      </div>
    </div>
  );
}
export default InfoContainer;