import React, { useEffect, useState } from 'react';
import {
  Flex,
  Items,
  Card,
  StyledSkeleton,
  StyledImage,
  StyledText
} from './styles';

const Image = ({ src, alt, isLoading }) => {
  if (isLoading) {
    return <StyledSkeleton />;
  }

  return src ? (
    <StyledImage src={src} alt={alt} />
  ) : null;
};

const Text = ({ children, type }) => {
  return <StyledText type={type}>{children}</StyledText>;
};

const ProductInfo = ({ imageSrc, name, description, price, isLoading }) => (
  <>
    <Image src={imageSrc} alt={name} isLoading={isLoading} />
    <Text type="h2">{isLoading ? <StyledSkeleton /> : name}</Text>
    <Text>{isLoading ? <StyledSkeleton count={2} /> : description}</Text>
    <Text>{isLoading ? <StyledSkeleton width={50} /> : price}</Text>
  </>
);

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

const ProductList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex>
      {products.map(product => (
        <Items key={product.id}>
          <ProductCard product={product} isLoading={isLoading} />
        </Items>
      ))}
    </Flex>
  );
};

export default ProductList;