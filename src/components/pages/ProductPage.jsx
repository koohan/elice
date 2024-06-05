import React from 'react';
import ProductList from '../product/ProductList';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 1',
      description: '제품 설명 1',
      price: '₩30,000'
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 2',
      description: '제품 설명 2',
      price: '₩50,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 4,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 4',
      description: '제품 설명 4',
      price: '₩90,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
  ];

  return (
    <div className="app">
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
