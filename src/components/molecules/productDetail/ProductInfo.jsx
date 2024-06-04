import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom : 10rem;
`;

const ProductTitle = styled.h1`
  margin-top : 24px;
  font-size: 24px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  margin-bottom: 20px;
  opacity : 0.6;
`;

const ProductInfo = ({ product }) => {
  return (
    <InfoContainer>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
    </InfoContainer>
  );
};

export default ProductInfo;
