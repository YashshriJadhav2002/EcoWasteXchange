import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Vision from './Components/Vision'
import Seller_register from './Components/Register/Seller_register';
import Login from './Components/Login/Login';
import About_us from './Components/About_us';
import Contact from './Components/Contact'
import Vendor_register from './Components/Register/Vendor_register';
import Company_register from './Components/Register/Company_register';


function App() {
  return (

    <div className="App">
          <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutUs" element={<About_us />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/signup' element={<Seller_register />}></Route>
      <Route path="/seller" element={<Login />} />
      <Route path="/vendor" element={<Login />} />
      <Route path="/company" element={<Login />} />
    </Routes>
    
    </div>
  );
}

export default App
