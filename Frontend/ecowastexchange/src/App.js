import './App.css';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import Seller_register from './Components/Register/Seller_register';
import Login from './Components/Login/Login';
import Vendor_register from './Components/Register/Vendor_register';
import Company_register from './Components/Register/Company_register';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutUs" element={<Login />} />
      <Route path="/vision" element={<Login />} />
      <Route path="/contact" element={<Login />} />
      <Route path='/signup' element={<Seller_register />}></Route>
    </Routes>
=======
      <Home/>
>>>>>>> 702db3d1fa937a2dc9682147d04ff32945fe78eb
    </div>
  );
}

export default App;
