import React from 'react';
import styled from 'styled-components';
import ProductDetail from '../../organisms/productDetail/ProductDetail';

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ProductDetailTemplate = ({ product }) => {
  return (
    <TemplateContainer>
      <Container>
      <ProductDetail product={product} />
      </Container>
    </TemplateContainer>
  );
};

export default ProductDetailTemplate;
