import React, { useState } from 'react';
import Logo from "../Images/Logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);

  const loginMenuOptions = [
    "Vendor",
    "Seller",
    "Company",
  ];

  return (
    <nav>
      <div className="navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Vision</a>
        <a href="">Contact</a>
        <a href="#" onClick={() => setLoginMenuOpen(!loginMenuOpen)}>
          Login <ArrowDropDownIcon />
        </a>
        {loginMenuOpen && (
          <div className="dropdown-menu">
            {loginMenuOptions.map((option, index) => (
              <a href="#" key={option}>
                {option}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
