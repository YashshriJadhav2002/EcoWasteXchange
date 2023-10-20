import React from 'react';
import Vendor_Sidebar from './Vendor_Sidebar';
import Vendor_Home from './Vendor_Home';
import Vendor_Navbar from './Vendor_Navbar';
import Vendor_Cart from './Vendor_Cart';
import {Routes,Route} from 'react-router-dom';
import phone from "../../../Images/phone_price.png"
import About_us from "../../../Images/About_us.jpg"
import '../../../Styles/Seller_Navbar.css';

const photosData = [
  { id: 1, src: phone, name: 'Photo 1',name1:'Rs.30000' },
  { id: 2, src: phone, name: 'Photo 2',name1:'Rs.30000' },
  { id: 3, src: About_us, name: 'Photo 3',name1:'Rs.30000' },
  { id: 4, src: phone, name: 'Photo 4',name1:'Rs.30000' },
  { id: 5, src: phone, name: 'Photo 1',name1:'Rs.30000' },
  { id: 6, src: phone, name: 'Photo 2',name1:'Rs.30000' },
  { id: 7, src: About_us, name: 'Photo 3',name1:'Rs.30000' },
  { id: 8, src: phone, name: 'Photo 4',name1:'Rs.30000' },
  



  // Add more photo objects as needed
];
const  Vendor_History = () => {
    return (
      <div>
      <Vendor_Navbar/>
      <Vendor_Sidebar>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px' }} >
      {photosData.map(photo => (
        <div key={photo.id} style={{ backgroundColor: '#fff', border: '0.1vh solid #ddd', padding: '5vh', textAlign: 'center' }} className='devices'>
          <img src={photo.src} alt={photo.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '1vh', marginBottom: '5vh' }} />
          <div style={{ fontWeight: 'bold' }}>{photo.name}</div>
          <div style={{ fontWeight: 'bold' }}>{photo.name1}</div>

        </div>
      ))}
    </div>
        </Vendor_Sidebar>
        </div>
    );
};

export default  Vendor_History;