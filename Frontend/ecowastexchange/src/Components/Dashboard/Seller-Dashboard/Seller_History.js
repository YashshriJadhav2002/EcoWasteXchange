import React from 'react';
import Seller_Sidebar from './Seller_Sidebar';
import Seller_Home from './Seller_Home';
import Seller_Navbar from './Seller_Navbar';
import Seller_Cart from './Seller_Cart';
import {Routes,Route} from 'react-router-dom';
const Seller_History = () => {
    return (
      <div>
      <Seller_Navbar/>
      <Seller_Sidebar>
        <h1> seller history</h1>
        </Seller_Sidebar>
        </div>
    );
};

export default Seller_History;