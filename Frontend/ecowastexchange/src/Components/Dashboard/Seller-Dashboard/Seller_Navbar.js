
import React from 'react';
import { useState, useEffect } from 'react';
import '../../../Styles/DashboardHomePage.css'

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Seller_Navbar = () => {

  const [data, setData] = useState('')

  useEffect(()=> {

    const sellerInfo = localStorage.getItem("sellerInfo")

    
    if(sellerInfo)
    {

      const sellerData = JSON.parse(sellerInfo)
      setData(sellerData.Name)
    }

})

  const [ProfileOpen, setProfileOptions] = useState(false);
  const [SellerOpen, setSellerOptions] = useState(false);

  const SellerOptions = [
    "Smartphones",
    "Earbud",
    "Laptop",
  ];

  const SettingOptions = [
    "Settings",
    "Logout",
  ];
  return (
    <nav className='heading'>
      <div className="">
       <img src='Logo.png' alt="" /> 
      </div>
      <div className='Welcome-seller'>
        <h2>WELCOME, {data}</h2>


      </div>
      <div className="navbar-links-container3">
        <a href="#" onClick={() => setSellerOptions(!SellerOpen)}>Sell Gadget<ArrowDropDownIcon /></a>
        {SellerOpen && (
          <div className="dropdown-menu-sellergadget">
            {SellerOptions.map((option, index) => (
              <a href={option} key={option}>
                {option}
              </a>
            ))}
          </div>
        )}
        <a href="#" onClick={() => setProfileOptions(!ProfileOpen)}>
          <img src='Logo.png' /><ArrowDropDownIcon />
        </a>
        {ProfileOpen && (
          <div className="dropdown-menu3">
            {SettingOptions.map((option, index) => (
              <a href={option} key={option}>
                {option}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Seller_Navbar;
