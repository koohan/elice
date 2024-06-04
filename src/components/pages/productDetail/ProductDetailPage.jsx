import React, { useEffect, useState } from 'react';
import ProductDetailTemplate from '../../templates/productDetail/ProductDetailTemplate';
import NavBar from '../../organisms/nav/NavBar';
import Sidebar from '../../molecules/sidebar/Sidebar';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setProduct(data.products[0]);
      });
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div> 
      <NavBar />
      <div style={{ marginTop : "4rem"}}>
      <ProductDetailTemplate product={product} /> 
      </div>
    </div>
  );
};

export default ProductDetailPage;
