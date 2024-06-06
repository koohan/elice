import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import ProductPage from "./pages/ProductPage"
import Main from './components/main/main';
import CartPage from './pages/CartPage';
import Register from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import Sidebar from './pages/Sidebarpage';
import AccountPage from './pages/AccountPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/Carts" element={<CartPage/>} />
          <Route path="/Checkouts" element={<CheckoutPage/>} />
          <Route path="/Details" element={<DetailPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
