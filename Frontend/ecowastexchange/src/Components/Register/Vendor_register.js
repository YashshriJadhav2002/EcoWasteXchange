import React, { useState } from 'react';
import '../../../src/Styles/Register.css'

const VendorRegister = () => {
  let name,email,phone,address,city,state,password

  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Address: '',
    Email: '',
    City: '',
    State: '',
    Password:'',
    Image: null,
    Document:null,
  });

  const [errors,setErrors]=useState({
    Name: '',
    Phone: '',
    Address: '',
    Email: '',
    City: '',
    State: '',
    Password:'',
    Image: null,
    Document:null,

  })


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const postData= async(e)=>{
    e.preventDefault()

    const {Name,Email,Phone,Address,City,State,Password}=formData;

    const res = await fetch("/api/buyer/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify
    ({
        Name,Email,Phone,Address,City,State,Password
    })
  
  })

  const data = await res.json()
  if(res.status===200)
  {
    
    window.alert("Registeration Successful")
    setErrors({Name: '',
    Phone: '',
    Address: '',
    Email: '',
    City: '',
    State: '',
    Password:'',
    Image: null,
    
})
window.location.href='/Vendor'
    }
  else
  {
    for(let i =0;i<data.error.length;i++)
    {
      if(data.error[i].path==="Name")
        name="** "+data.error[i].msg
      
      else if(data.error[i].path==="Email")
        email ="** "+data.error[i].msg

      else if(data.error[i].path==="Password")
       password="** "+data.error[i].msg
      
      else if(data.error[i].path==="Address")
        address="** "+data.error[i].msg
      
      else if(data.error[i].path==="City")
       city="** "+data.error[i].msg
      
      else if(data.error[i].path==="State")
        state="** "+data.error[i].msg
      
      else if(data.error[i].path==="Phone")
        phone="** "+data.error[i].msg
      
    }
      setErrors({
        Name:name,
        Email:email,
        Address:address,
        City:city,
        State:state,
        Phone:phone,
        Password:password
      })

      
  }

  }

  return (
    <div className='register-container'>
      <div className="header">
        <div className="register-text">Register</div>
        <div className="register-underline"></div>
      </div>
      <form method='post'>
        <div className="register-inputs">
          <div className="register-input">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              required
              value={formData.Name}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.Name}</span>
          <div className="register-input">
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              required
              value={formData.Phone}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.Phone}</span>
          <div className="register-input">
            <input
              type="text"
              name="Address"
              placeholder="Address"
              required
              value={formData.Address}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.Address}</span>
          <div className="register-input">
            <input
              type="email"
              name="Email"
              required
              placeholder="Email"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.Email}</span>
          <div className="register-input">
            <input
              type="city"
              name="City"
              required
              placeholder="City"
              value={formData.City}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.City}</span>
          <div className="register-input">
            <input
              type="state"
              name="State"
              required
              placeholder="State"
              value={formData.State}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.State}</span>
          <div className="register-input">
            <input
              type="password"
              name="Password"
              required
              placeholder="Password"
              value={formData.Password}
              onChange={handleInputChange}
            />
          </div>
          <span className='spanmsg'>{errors.Password}</span>
        </div>
        
        <div>
          <div className="register-upload-image">
            <label htmlFor="image">Upload profile photo</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="register-upload-image">
            <label htmlFor="Document">Upload Document</label>
            <input
              id="Document"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "Document")}
            />
          </div>
        </div>
        <div className="register-submit-container">
          <button type="register-submit" className="register-submit" onClick={postData}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default VendorRegister;
