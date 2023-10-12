import React, { useState } from 'react';
import '../../../src/Styles/Register.css'
const VendorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    city: '',
    state: '',
    image: null,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can access the selected image as formData.image and perform actions like uploading it to the server
    console.log(formData);
  };

  return (
    <div className='register-container'>
      <div className="header">
        <div className="register-text">Register</div>
        <div className="register-underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="register-inputs">
          <div className="register-input">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="register-input">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="register-input">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="register-input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="register-input">
            <input
              type="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="register-input">
            <input
              type="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
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
        </div>
        <div className="register-submit-container">
          <button type="register-submit" className="register-submit">Sign Up</button>
          <div className="register-submit" onClick={event => window.location.href='/login'}>Login</div>
        </div>
      </form>
    </div>
  );
};

export default VendorRegister;
