import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/atoms/login/login';
import ProductPage from "./components/pages/products/ProductPage"
import Nav from './components/organisms/nav/NavBar'; //확인용


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
