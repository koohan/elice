import React from 'react';
import { RelatedProductsStyled, RelatedProductItem, CommonTitle } from './styles/RelatedProductsStyles';

const RelatedProducts = ({ products }) => {
  return (
    <RelatedProductsStyled>
      <CommonTitle>관련 제품</CommonTitle>
      <ul>
        {products.map((product) => (
          <RelatedProductItem key={product.productId}>
            <img src={product.images[0]} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('ko-KR')}원</p>
          </RelatedProductItem>
        ))}
      </ul>
    </RelatedProductsStyled>
  );
};

export default RelatedProducts;
