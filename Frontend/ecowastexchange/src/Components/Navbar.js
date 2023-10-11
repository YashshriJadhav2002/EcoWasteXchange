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
  return (
    <nav>
      <div className="">
      <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="aboutUs">About Us</a>
        <a href="vision">Vision</a>
        <a href="contact">Contact</a>
        <a href='login'>Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
