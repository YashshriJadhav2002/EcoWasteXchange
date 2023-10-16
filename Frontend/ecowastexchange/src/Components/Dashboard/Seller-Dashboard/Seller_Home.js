import React from 'react';

import Seller_Cart from './Seller_Cart';
import Seller_Sidebar from './Seller_Sidebar';

import Seller_History from './Seller_History';
import Seller_Navbar from './Seller_Navbar';
import {Routes,Route} from 'react-router-dom';

const Seller_Home = () => {
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

export default Seller_Home;