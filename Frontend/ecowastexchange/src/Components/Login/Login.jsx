import React from 'react';
//  import email_icon from "../Components/Login/email.png";
//  import password_icon from '../Components/Login/password.png';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add the logic to handle the login process, such as sending the email and password to the server
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="inputs">
          <div className="input">
            {/* <img src={email_icon} alt=""/> */}
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            {/* <img src={password_icon} alt=""/> */}
            <input type="password" placeholder='Password'/>
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
