
import React from 'react';
import { useState } from 'react';
import '../../../Styles/DashboardHomePage.css'

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Seller_Navbar = () => {
  const [ProfileOpen, setProfileOptions] = useState(false);
  const [SellerOpen, setSellerOptions] = useState(false);

  const SellerOptions = [
    "Smart Phones",
    "Ear buds",
    "Laptop",
  ];

  const SettingOptions = [
    "Settings",
    "Logout",
  ];
  return (
    <nav className='heading'>
      <div className="">
      {/* <img src={Logo} alt="" /> */}
      </div>
      <div className="navbar-links-container3">
        <a href="#" onClick={() => setSellerOptions(!SellerOpen)}>Seller Gadget<ArrowDropDownIcon /></a>
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
