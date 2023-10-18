import React from "react";
import seller from "../../../Images/seller.jpg"
import "../../../Styles/Seller_Settings.css";

import Seller_Navbar from "./Seller_Navbar";

const Seller_Settings = () => {

    return (
        <div >
        <Seller_Navbar></Seller_Navbar>
          
          <div class="sellersetting-container">
            <div class="photo">
              
              <img src={seller} alt="" />
                
              </div>
    
    
            <div class="contact-form">
              <form action="index.html" autocomplete="off">
                <h3 class="title">User data</h3>
                <label for="" style={{"color":"white"}}>Seller Name</label>
                <div class="inputvalues-container">
                  <input type="text" name="name" class="contact-input" />
                  
                </div>
                <label for="" style={{"color":"white"}}>Phone Number</label>
                <div class="inputvalues-container">
                  <input type="tel" placeholder="phone" class="contact-input" />
                </div>

                <label for="" style={{"color":"white"}}>Address</label>
                <div class="inputvalues-container textarea">
                <textarea name="text" class="contact-input"></textarea>
                </div>

                <label for="" style={{"color":"white"}}>Email</label>
                <div class="inputvalues-container">
                <input type="email" class="contact-input" />
                </div>

                <label for="" style={{"color":"white"}}>City</label>
                <div class="inputvalues-container">
                <input type="city" class="contact-input" />
                </div>

                <label for="" style={{"color":"white"}}>State</label>
                <div class="inputvalues-container">
                <input type="state" class="contact-input" />
                </div>

                <input type="submit" value="Edit Profile" class="btn" />
              </form>
            </div>
          </div>
        </div>
      
      )}
    

export default Seller_Settings;