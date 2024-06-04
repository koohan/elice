import React from 'react';
import styled from 'styled-components';

const StyledDetail = styled.div`
padding : 20px
`;

const StyledTitle = styled.h1`
margin-bottom: 20px; 
`;

const StyledParagraph = styled.p`

margin-bottom: 20px; 
`;

const ProductDec = ({ product }) => {

  return (
    <StyledDetail>
      <StyledTitle>제품 상세 정보</StyledTitle>
      <StyledParagraph>{product.description}</StyledParagraph>
      <StyledParagraph>{product.description}</StyledParagraph>
    </StyledDetail>
  );
};

export default ProductDec;
