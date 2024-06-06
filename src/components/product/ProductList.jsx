import React, { useEffect, useState } from 'react';
import { Flex, Items } from './styles/LayoutStyles';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const productItems = [...products];
  const placeholdersNeeded = 4 - (productItems.length % 4);
  if (placeholdersNeeded < 4) {
    for (let i = 0; i < placeholdersNeeded; i++) {
      productItems.push({ id: `placeholder-${i}`, placeholder: true });
    }
  }

  return (
    <Flex>
      {productItems.map((product, index) => (
        <Items key={product.placeholder ? `placeholder-${index}` : `${product.id}-${index}`} className={product.placeholder ? 'placeholder' : ''}>
          {!product.placeholder && <ProductCard product={product} isLoading={isLoading} />}
        </Items>
      ))}
    </Flex>
  );
};

export default ProductList;
