import React from 'react';
import '../../../src/Styles/Vision.css'
import vision from '../../../src/Images/Vision.png';


    const InfoContainer = () => 
    {
   return (
    
    <div >
         <img src={vision} className='visionimage' alt="" />
         <div className="vision-container">
      <h1 style={{color: "green"}}>Vision</h1><br></br>
      <p>
      "EchoWasteXchange envisions a world where sustainability is at the forefront,<br></br> empowering sellers to contribute to a circular economy by offering their 
      <br></br>products for sale. Vendors play a vital role by acquiring these items and then channeling them toward <br></br>
      companies that specialize in repair, refurbishment, and repurposing.<br></br>
       Together, we strive to create a future where waste is minimized,<br></br> 
       and products are given a second life, preserving our planet's resources and fostering economic growth."
      </p>
      </div>
    </div>
  );
}
export default InfoContainer;