import React from 'react';
import Seller_Sidebar from './Seller_Sidebar';
import Seller_Home from './Seller_Home';

import Seller_Cart from './Seller_Cart';
import {Routes,Route} from 'react-router-dom';
const Seller_History = () => {
    return (
<Seller_Sidebar>
        <Routes>
          <Route path="/" element={<Seller_Home />} />
          <Route path="/Home" element={<Seller_Home />} />
          <Route path="/Cart" element={<Seller_Cart />} />
          <Route path="/History" element={<Seller_History />} />
        </Routes>
      </Seller_Sidebar>
    );
};

export default Seller_History;