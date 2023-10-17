import React from 'react';
import Seller_Sidebar from './Seller_Sidebar';
import Seller_Home from './Seller_Home';
import Seller_History from './Seller_History';
import {Routes,Route} from 'react-router-dom';
import Seller_Navbar from './Seller_Navbar';

const Seller_Cart = () => {
  
    return (
      <div>
        <Seller_Navbar/>
        <Seller_Sidebar>
        <h1>seller cart</h1>
        </Seller_Sidebar>
      </div>
    );
};

export default Seller_Cart;