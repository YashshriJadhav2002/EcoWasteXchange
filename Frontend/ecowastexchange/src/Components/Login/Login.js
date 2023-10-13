import React from 'react';
import '../../Styles/Login.css'
import { useLocation } from 'react-router-dom';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add the logic to handle the login process, such as sending the email and password to the server
  };
  const location = useLocation(); 
  const page = location.pathname.split('/').pop();
  const pageName = page + 'register';
  return (
    <div className='login-container'>
      <div className="header">
        <div className="login-text">Login</div>
        <div className="login-underline"></div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="login-inputs">
          <div className="login-input">
            {/* <img src={email_icon} alt=""/> */}
            <input type="email" placeholder="Email"/>
          </div>
          <div className="login-input">
            {/* <img src={password_icon} alt=""/> */}
            <input type="password" placeholder='Password'/>
          </div>
        </div>
        <div className="login-submit-container">
          <button type="login-submit" className="login-submit">Login</button>
          
          <button type="signup" className="login-submit" onClick={event => window.location.href={pageName }} >Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
