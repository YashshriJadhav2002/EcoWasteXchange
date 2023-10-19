import React, { useEffect } from 'react';
import phone from "../../../Images/phone_price.png"
import About_us from "../../../Images/About_us.jpg"

import Seller_Sidebar from './Seller_Sidebar';
import Seller_Navbar from './Seller_Navbar';
import '../../../Styles/DashboardHomePage.css';

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

const Seller_Home = () => {


  useEffect(()=> {

      const sellerInfo = localStorage.getItem("sellerInfo")

      
      if(sellerInfo)
      {

        const data = JSON.parse(sellerInfo)
        console.log(data.Name)
        
      }

  })
    return (
      <div>
       <Seller_Navbar> </Seller_Navbar>
      <Seller_Sidebar> 
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
      {photosData.map(photo => (
        <div key={photo.id} style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', textAlign: 'center' }}>
          <img src={photo.src} alt={photo.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }} />
          <div style={{ fontWeight: 'bold' }}>{photo.name}</div>
          <div style={{ fontWeight: 'bold' }}>{photo.name1}</div>

        </div>
      ))}
    </div>
      
      </Seller_Sidebar>
    </div>
    );
};

export default Seller_Home;