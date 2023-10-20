
import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import '../../../Styles/DashboardHomePage.css'

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import '../../../Styles/DashboardHomePage.css';

const Seller_Navbar = () => {

      const [data, setData] = useState('')



      useEffect(()=> {

        const fetchUser = async() => {


          const token = localStorage.getItem("auth-token")
          const auth_token=JSON.parse(token)
          const res=await fetch('/api/seller/profile',
          {
            method:"POST",
            headers:
            {
            "Content-Type":"application/json",
            },
            body: JSON.stringify({
              auth_token: auth_token
            })
          })

            const data=await res.json()
            if(res.status===200)
            {
              
              setData(
                data.data.Name
              )


            }
        }
        
        fetchUser()

      }, [])
  

  const [ProfileOpen, setProfileOptions] = useState(false);
  const [SellerOpen, setSellerOptions] = useState(false);
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
      <div className='Welcome-seller'>
        <h2>WELCOME, {data}</h2>


      </div>
      <div className="navbar-links-container3">
        <a href="#" onClick={() => setSellerOptions(!SellerOpen)}>Sell Gadget<ArrowDropDownIcon /></a>
        {SellerOpen && (
          <div className="dropdown-menu-sellergadget">
            {sellerOptions.map((option, index) => (
              <a href={option} key={option}>
                {option}
              </a>
            ))}
          </div>
        )}
        <a href="#" onClick={() => setProfileOptions(!ProfileOpen)}>
          <img src='Logo.png' alt="" /><ArrowDropDownIcon />
        </a>
        {ProfileOpen && (
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
