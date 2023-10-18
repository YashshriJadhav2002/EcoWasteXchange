import React, { useEffect } from 'react';


import Seller_Sidebar from './Seller_Sidebar';
import Seller_Navbar from './Seller_Navbar';
import '../../../Styles/DashboardHomePage.css';


const Seller_Home = () => {


  useEffect(()=> {

      const sellerInfo = localStorage.getItem("sellerInfo")

      
      if(sellerInfo)
      {

        const data = JSON.parse(sellerInfo)
        console.log(data.Name)
        
      }

  })
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