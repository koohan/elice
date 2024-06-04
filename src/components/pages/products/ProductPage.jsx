import React, { useEffect, useState } from 'react';
import ProductList from '../../templates/products/ProductList';
import Sidebar from '../../molecules/sidebar/Sidebar';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;



const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <ContentContainer>
        <ProductList products={products} />
      </ContentContainer>
    </PageContainer>
  );
};

export default ProductPage;
