import React, { useState } from 'react';

import '../../../Styles/SellerDashboard.css'


import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Seller_Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/SellerHome",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/SellerCart",
            name:"Cart",
            icon:<FaUserAlt/>
        },
        {
            path:"/SellerHistory",
            name:"History",
            icon:<FaRegChartBar/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img src='Logo.png' className='logo' />
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='home-container'>{children}</main>
        </div>
    );
};

export default Seller_Sidebar;