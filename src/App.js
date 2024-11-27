import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';

import { Bounce, ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
  return (
    <div  >
      <ToastContainer
      autoClose={2000}
      transition={Bounce}
      />
   
      
 <Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="/home" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
  </Routes>
    </div>
  );
}

export default App;
