import './App.css';
import Home from './Components/landing_page/Home';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/landing_page/Navbar';
import Vision from './Components/landing_page/Vision'
import SellerRegister from './Components/Register/Seller_register';
import Login from './Components/Login/Login';
import About_us from './Components/landing_page/About_us';
import Contact from './Components/landing_page/Contact';
import VendorRegister from './Components/Register/Vendor_register';
import CompanyRegister from './Components/Register/Company_register';
import Seller_Home from './Components/Dashboard/Seller-Dashboard/Seller_Home';
import Seller_Cart from './Components/Dashboard/Seller-Dashboard/Seller_Cart';
import Seller_History from './Components/Dashboard/Seller-Dashboard/Seller_History';
import Seller_Settings from './Components/Dashboard/Seller-Dashboard/Seller_Settings';
import SmartPhones from './Components/Dashboard/Seller-Dashboard/SmartPhones';
import Earbuds from './Components/Dashboard/Seller-Dashboard/Earbuds';
import Laptop from './Components/Dashboard/Seller-Dashboard/Laptop';
import Seller_Logout from './Components/Dashboard/Seller-Dashboard/Seller_Logout';
import Exact_Price from './Components/Dashboard/Seller-Dashboard/Exact_Price';
import Buy_Refurbished from './Components/Dashboard/Seller-Dashboard/Buy_Refurbished';

function App() {
  return (

    <div className="App">
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutUs" element={<About_us />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/SellerRegister' element={<SellerRegister />}></Route>
      <Route path='/VendorRegister' element={<VendorRegister/>}></Route>
      <Route path='/CompanyRegister' element={<CompanyRegister />}></Route>
      <Route path="/seller" element={<Login />} />
      <Route path="/vendor" element={<Login />} />
      <Route path="/company" element={<Login />} />
      <Route path="/SellerHome" element={<Seller_Home/>}/>
      <Route path="/SellerCart" element={<Seller_Cart/>}/>     
      <Route path="/SellerHistory" element={<Seller_History/>}/>
      <Route path="/Smartphones" element={<SmartPhones/>}/>
      <Route path="/Earbud" element={<Earbuds/>}/>
      <Route path="/Laptop" element={<Laptop/>}/>
      <Route path="/ExactPrice" element={<Exact_Price/>}/>
      <Route path='/Settings' element={<Seller_Settings/>}/>
      <Route path='/Logout' element={<Seller_Logout/>} />
      <Route path='/BuyRefurbished' element={<Buy_Refurbished/>} />
    </Routes>
    
    </div>
  );
}

export default App
