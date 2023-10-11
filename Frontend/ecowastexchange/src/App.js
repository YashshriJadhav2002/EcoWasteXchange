import './App.css';
import Home from './Components/landing_page/Home';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/landing_page/Navbar';
import Vision from './Components/landing_page/Vision'
import Seller_register from './Components/Register/Seller_register';
import Login from './Components/Login/Login';
import About_us from './Components/landing_page/About_us';
import Contact from './Components/landing_page/Contact'



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
    </Routes>
    
    </div>
  );
}

export default App
