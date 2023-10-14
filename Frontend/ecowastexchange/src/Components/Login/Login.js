import React, {useState} from 'react';
import '../../Styles/Login.css'
import { useLocation } from 'react-router-dom';

const Login = () => {

    let Email,Password

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [errors,setErrors]=useState({
      
      Email:'',
      Password:''
     
      
    })
  
    const LoginData = async(e) => {

      e.preventDefault();

      const res = await fetch('/api/seller/login', {
        
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          Email:email,
          Password:password
        })

      })

      const data = await res.json();
      if(res.status===200)
      {
        
        window.alert("valid Registeration")
        setErrors({
       
        Email: '',
        Password:''
        
         })
    
      }
      else if(res.status===400)
      {
        for(let i =0;i<data.error.length;i++)
        { 
          
          
          if(data.error[i].path==="Email")
            Email ="** "+data.error[i].msg

          else if(data.error[i].path==="Password")
            Password="** "+data.error[i].msg
          
         
        }
          setErrors({
           
            Email:Email,
            Password:Password
          })

          
      }

 
    } 

  return (
    <div className='login-container'>
      <div className="header">
        <div className="login-text">Login</div>
        <div className="login-underline"></div>
      </div>

      <form method='POST'>
        
        <div className="login-inputs">
        <span className='spanmsg'>{errors.Email}</span>
          <div className="login-input">
           
            <input 
              type="email" 
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            
          </div>
          <span className='spanmsg'>{errors.Password}</span>
          <div className="login-input">
           
            <input 
              type="password" 
              placeholder='Password'
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />

          </div>
        </div>

        <div className="login-submit-container">
          <button 
              type="login-submit" 
              className="login-submit"
              onClick={LoginData}

          >Login</button>
          
          <button type="signup" className="login-submit" onClick={event => window.location.href={pageName }} >Sign Up</button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
