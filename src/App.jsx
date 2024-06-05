import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/login/LoginPage';
import ProductPage from "./components/pages/products/ProductPage"
import ProductDetailPage from './components/pages/productDetail/ProductDetailPage';
import Main from './components/pages/main/Mainpage';
import CartPage from './components/pages/cartpages/CartPage';
import CheckoutPage from './components/pages/checkout/CheckoutPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/productDetail" element={<ProductDetailPage/>} />
          <Route path="/CartItems" element={<CartPage/>} />
          <Route path="/Checkout" element={<CheckoutPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
