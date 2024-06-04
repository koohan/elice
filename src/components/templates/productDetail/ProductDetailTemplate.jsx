import React from 'react';
import styled from 'styled-components';
import ProductDetail from '../../organisms/productDetail/ProductDetail';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container>
      <DetailContainer>
        <ProductDetail product={product} />
      </DetailContainer>
    </Container>
  );
};

export default ProductDetailTemplate;
