import React, { useEffect, useState } from 'react';
import ProductDetailTemplate from '../../templates/productDetail/ProductDetailTemplate';




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
      <ProductDetailTemplate product={product} />
    </div>
  );
};

export default ProductDetailPage;
