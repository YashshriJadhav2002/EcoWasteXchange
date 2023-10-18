import React, { useState, useEffect, useRef } from 'react';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import '../../../Styles/DashboardHomePage.css';

const Seller_Navbar = () => {
  const [profileOpen, setProfileOptions] = useState(false);
  const [sellerOpen, setSellerOptions] = useState(false);
  const dropdownContainerRef = useRef(null);

  const sellerOptions = ["Smartphones", "Earbud", "Laptop"];
  const settingOptions = ["Settings", "Logout"];

  useEffect(() => {
    // Add a click event listener to the document
    const handleClickOutside = (event) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
        // Click occurred outside the dropdowns, close both dropdowns
        setProfileOptions(false);
        setSellerOptions(false);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <nav className='heading'>
      <div className="">
        <img src='Logo.png' alt="" />
      </div>
      <div className="navbar-links-container3" ref={dropdownContainerRef}>
        <a href="#" onClick={() => setSellerOptions(!sellerOpen)}>
          Sell Gadget<ArrowDropDownIcon />
        </a>
        {sellerOpen && (
          <div className="dropdown-menu-sellergadget">
            {sellerOptions.map((option, index) => (
              <a href={option} key={option}>
                {option}
              </a>
            ))}
          </div>
        )}
        <a href="#" onClick={() => setProfileOptions(!profileOpen)}>
          <img src='Logo.png' alt="" /><ArrowDropDownIcon />
        </a>
        {profileOpen && (
          <div className="dropdown-menu3">
            {settingOptions.map((option, index) => (
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
