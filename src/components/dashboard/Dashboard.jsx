import React from 'react';
import PriceData from './PriceData';
import ProductList from './ProductList';
import { Container } from './styles/GlobalLayout';
import { HeaderContainer } from './styles/BoardLayout';
import { ProductInput } from './styles/ProductLayout';
import { CommonTitle } from './styles/FontStyles';

const Dashboard = ({ data }) => {
  return (
    <Container>
      <HeaderContainer>
        <CommonTitle>대시보드</CommonTitle>
        <ProductInput placeholder="주문 검색..." />
      </HeaderContainer>
      <PriceData priceData={data.priceData} />
      <ProductList productList={data.productList} />
    </Container>
  );
};

export default Dashboard;
