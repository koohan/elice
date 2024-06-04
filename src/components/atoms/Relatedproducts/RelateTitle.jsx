import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 16px;
  padding-top: 12px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  padding-top: 12px;
`;

const RelateTitle = ({ product }) => {
  return (
    <div>
      <InfoContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
      </InfoContainer>
    </div>
  );
};

export default RelateTitle;
