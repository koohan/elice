import React from 'react';
import ProductDetailTemplate from '../../templates/productDetail/ProductDetailTemplate';
import myimg from "../../../assets/test.jpg";

const products = [
  {
    id: 1,
    imageSrc: myimg,
    name: '아크메 프리즘 티셔츠',
    description: '60% 콤비드 링스판 면/40% 폴리에스터 저지 티셔츠.',
    price: '$99.99',
  },
];

const ProductDetailPage = () => {
  const product = products[0]; 

  return (
    <div>
      <ProductDetailTemplate product={product} />
    </div>
  );
};

export default ProductDetailPage;
