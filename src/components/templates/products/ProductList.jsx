import React, { useEffect, useState } from 'react';
import ProductCard from '../../organisms/products/ProductCard';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 1px; 
  justify-content: space-between;
  padding: 50px;
`;

const Items = styled.div`
  flex: 0 1 calc(25% - 1px); 
  box-sizing: border-box;
`;

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
