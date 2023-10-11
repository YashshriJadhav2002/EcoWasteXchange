import React, { useState } from 'react';
import './Register.css'
const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    profilePhoto: null,
    document: null, // New property for the additional image
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can access both the selected images as formData.profilePhoto and formData.additionalPhoto
    console.log(formData);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="phone"
              placeholder="Phone"   
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <div className="upload-image">
            <label htmlFor="profile-photo">Upload profile photo</label>
            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "profilePhoto")}
            />
          </div>
          <div className="upload-image">
            <label htmlFor="Document">Upload Document</label>
            <input
              id="Document"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "Document")}
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">Sign Up</button>
          <div className="submit" onClick={event => window.location.href='/login'}>Login</div>
        </div>
      </form>
    </div>
  );
};

export default CompanyRegister;
