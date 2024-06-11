import React from 'react';
import ProductInfo from './ProductInfo';
import { Container, Card } from './styles/LayoutStyles';

const ProductCard = ({ product }) => {

  const imageSrc = product.images && product.images.length > 0 ? product.images[0] : null;

  return (
    <Container>
      <Card>
        <ProductInfo
          imageSrc={imageSrc} 
          name={product.name}
          description={product.description}
          price={product.price}
        />
      </Card>
    </Container>
  );
};

export default ProductCard;
