import React from 'react';
import ProductInfo from './ProductInfo';
import { Card } from './styles/LayoutStyles';

const ProductCard = ({ product, isLoading }) => (
  <Card>
    <ProductInfo
      imageSrc={product.imageSrc}
      name={product.name}
      description={product.description}
      price={product.price}
      isLoading={isLoading}
    />
  </Card>
);

export default ProductCard;
