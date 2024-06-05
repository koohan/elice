import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/login/LoginPage';
import ProductPage from "./components/pages/ProductPage"
import Main from './components/pages/main/Mainpage';
import CartPage from './components/pages/CartPage';
import Register from './components/pages/register/RegisterPage';
import CheckoutPage from './components/pages/CheckoutPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/Carts" element={<CartPage/>} />
          <Route path="/Checkouts" element={<CheckoutPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
