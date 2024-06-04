import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/atoms/login/login';
import ProductPage from "./components/pages/products/ProductPage"
import ProductDetailPage from './components/pages/productDetail/ProductDetailPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/productDetail" element={<ProductDetailPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
