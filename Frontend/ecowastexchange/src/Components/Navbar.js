<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import Login from './Login/Login';
import Logo from "../Images/Logo.png";
import { NavLink } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
=======
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

>>>>>>> 702db3d1fa937a2dc9682147d04ff32945fe78eb
  return (
    <nav>
      <div className="navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
<<<<<<< HEAD
        <a href="aboutUs">About Us</a>
        <a href="vision">Vision</a>
        <a href="contact">Contact</a>
        <a href='login'>Login</a>
=======
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
>>>>>>> 702db3d1fa937a2dc9682147d04ff32945fe78eb
      </div>
    </nav>
  );
};

export default Navbar;
