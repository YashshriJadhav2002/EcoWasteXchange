import React from 'react';
import '../../Styles/Login.css'
import { useLocation } from 'react-router-dom';


const Login = () => {


  const location = useLocation();
  const page = location.pathname.split('/').pop();
  
  return (
    <div className='login-container'>
      <div className="header">
        <div className="login-text">Login</div>
        <div className="login-underline"></div>
      </div>
      <form>
        <div className="login-inputs">
          <div className="login-input">
            {/* <img src={email_icon} alt=""/> */}
            <input type="email" placeholder="Email" />
          </div>
          <div className="login-input">
            {/* <img src={password_icon} alt=""/> */}
            <input type="password" placeholder='Password' />
          </div>
        </div>
        <div className="login-submit-container">
          <button type='login-submit' className="login-submit" onClick={(event)=>window.location.href = '/Seller'}>Login</button>
          <button type='signup' className="login-submit" onClick={function (event) {
            event.preventDefault();
            if (page === "Seller") {
              window.location.href = '/SellerRegister'
            }

            else if (page === "Vendor") {
              window.location.href = '/VendorRegister'
            }
            else {
              window.location.href = '/CompanyRegister'
            }
          }} >Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
