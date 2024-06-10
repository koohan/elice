import React from 'react';
import ProductInfo from './ProductInfo';
import { Container, Card } from './styles/LayoutStyles';


const ProductCard = ({ product }) => (
  <Container>
    <Card>
      <ProductInfo
        imageSrc={product.imageSrc}
        name={product.name}
        description={product.description}
        price={product.price}
      />
    </Card>
  </Container>
);

export default ProductCard;
