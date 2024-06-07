import React from 'react';
import { ProductContainer, ProductBox, ProductGroup, ProductInput } from './styles/ProductLayout';
import { ProductItem } from './styles/FontStyles';

const ProductList = ({ productList }) => {
  return (
    <ProductContainer>
      {productList.map((product) => (
        <ProductBox key={product.id}>
          <ProductGroup>
            <ProductItem>
              <strong>주문 ID</strong>
            </ProductItem>
            <ProductItem>
              <strong>브랜드</strong>
            </ProductItem>
            <ProductItem>
              <strong>금액</strong>
            </ProductItem>
            <ProductItem>
              <strong>상태</strong>
            </ProductItem>
          </ProductGroup>
          <ProductGroup>
            <ProductItem>{product.id}</ProductItem>
            <ProductItem>{product.brand}</ProductItem>
            <ProductItem>₩{product.amount.toLocaleString()}</ProductItem>
            <ProductItem>{product.status}</ProductItem>
          </ProductGroup>
        </ProductBox>
      ))}
    </ProductContainer>
  );
};

export default ProductList;
