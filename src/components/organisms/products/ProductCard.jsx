import React from 'react';
import ProductInfo from '../../molecules/products/Productinfo';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const Card = styled.div`
  padding: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left : auto;
  margin-right : auto;
`;

const ProductCard = ({ product, isLoading }) => (
  <Card>
    <ProductInfo
      imageSrc={product.imageSrc}
      name={product.name}
      description={product.description}
      price={product.price}
      isLoading={isLoading}
    />
  </Card>
);

export default ProductCard;
