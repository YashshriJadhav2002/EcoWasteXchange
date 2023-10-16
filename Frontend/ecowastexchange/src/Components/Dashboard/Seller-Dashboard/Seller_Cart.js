import React from 'react';
import Seller_Sidebar from './Seller_Sidebar';
import Seller_Home from './Seller_Home';
import Seller_History from './Seller_History';
import {Routes,Route} from 'react-router-dom';
import Seller_Navbar from './Seller_Navbar';

const Seller_Cart = () => {
  <Seller_Navbar/>
    return (
        <Seller_Sidebar>
        <Routes>
          
          <Route path="/SellerHome" element={<Seller_Home />} />
          <Route path="/SellerCart" element={<Seller_Cart />} />
          <Route path="/SellerHistory" element={<Seller_History />} />
        </Routes>
      </Seller_Sidebar>
    );
};

export default Seller_Cart;