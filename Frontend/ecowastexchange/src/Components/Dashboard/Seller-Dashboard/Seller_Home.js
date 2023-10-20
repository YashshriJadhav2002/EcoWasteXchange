import React, { useEffect } from 'react';


import Seller_Sidebar from './Seller_Sidebar';
import Seller_Navbar from './Seller_Navbar';
import '../../../Styles/DashboardHomePage.css';


const Seller_Home = () => {


    return (
      <div>
       <Seller_Navbar> </Seller_Navbar>
      <Seller_Sidebar> 
        
      <h1>home page</h1>
      </Seller_Sidebar>
    </div>
    );
};

export default Seller_Home;