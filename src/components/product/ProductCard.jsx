import React from 'react';
import ProductInfo from './ProductInfo';
import { Container, Card } from './styles/LayoutStyles';


const ProductCard = ({ product, isLoading }) => (
  <Container>
    <Card>
      <ProductInfo
        imageSrc={product.imageSrc}
        name={product.name}
        description={product.description}
        price={product.price}
        isLoading={isLoading}
      />
    </Card>
  </Container>
);

export default ProductCard;
