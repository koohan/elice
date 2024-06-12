import React from 'react';
import { RelatedProductsStyled, RelatedProductItem, CommonTitle } from './styles/RelatedProductsStyles';

const RelatedProducts = ({ products = [] }) => {
  const placeholderImage = 'https://via.placeholder.com/150';

  return (
    <RelatedProductsStyled>
      <CommonTitle>관련 제품</CommonTitle>
      <ul>
        {products.map((product) => (
          <RelatedProductItem key={product._id}>
            <img src={product.images.length > 0 ? product.images[0] : placeholderImage} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('ko-KR')}원</p>
          </RelatedProductItem>
        ))}
      </ul>
    </RelatedProductsStyled>
  );
};

export default RelatedProducts;
