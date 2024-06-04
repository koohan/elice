import React from 'react';
import Relatedproducts from '../../atoms/Relatedproducts/Relatedproduct';
import RelateImg from '../../atoms/Relatedproducts/RelateImg';
import RelateTitle from '../../atoms/Relatedproducts/RelateTitle';
import styled from 'styled-components';

const RelateImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
`;

const Related = ({ product }) => {
  return (
    <div>
      <Relatedproducts />
      <RelateImgContainer>
        <div>
          <RelateImg src={product.imageSrc} alt={product.name} />
          <RelateTitle product={product} />
        </div>
      </RelateImgContainer>
    </div>
  );
};

export default Related;
