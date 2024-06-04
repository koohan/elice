import React from 'react';
import styled from 'styled-components';

const StyledDetail = styled.div`
  padding: 20px;
`;

const StyledTitle = styled.h1`
  margin-bottom: 20px;
`;

const Relatedproducts = () => {
  return (
    <StyledDetail>
      <StyledTitle>관련 제품</StyledTitle>
    </StyledDetail>
  );
};

export default Relatedproducts;
