import React from 'react'
import '../../../Styles/Exact_Price.css';
import phone from "../../../Images/phone_price.png";
import Seller_Navbar from './Seller_Navbar';

function Exact_Price() {
  return (
    <div>
        <Seller_Navbar></Seller_Navbar>
    <div className='item-container'>
        <div className='product-image'>
      <img src={phone}></img> 
      </div> 
      <div className='device-name'>
      <h1>Samsung Galaxy A21s (8 GB/128 GB)</h1>
      <h3>Selling Price:</h3>
      <br></br>
      <h1 style={{"color":"red"}}>Rs.500</h1>
      <br></br>
      <br></br>
      <br></br>
      <text>Fast <br></br>Payments</text>
      <div className="verticleline">
      </div>
      <div className="textclass">
      <text>100% Safe</text>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Exact_Price