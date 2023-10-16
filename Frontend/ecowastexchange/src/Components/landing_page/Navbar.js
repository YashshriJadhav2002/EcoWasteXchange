  import React from 'react';
  import { useState } from 'react';
  import '../../../src/Styles/Home.css'
  import Logo from '../../../src/Images/Logo.png';
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
        <div className="">
        <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <a href="/">Home</a>
          <a href="aboutUs">About Us</a>
          <a href="vision">Vision</a>
          <a href="contact">Contact</a>
          <a href="#" onClick={() => setLoginMenuOpen(!loginMenuOpen)}>
            Login <ArrowDropDownIcon />
          </a>
          {loginMenuOpen && (
            <div className="dropdown-menu">
              {loginMenuOptions.map((option, index) => (
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

  export default Navbar;
