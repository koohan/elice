import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';
import useFetchData from '../hook/useFetchData';
import background from "../../public/assets/product.png";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 5rem;
  left: 10rem;
  width: 80%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const ProductPage = () => {
  const fetchUrl = '/api/product';
  const { data, loading, error } = useFetchData(fetchUrl);
  console.log(data)



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ContentWrapper>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          <BackgroundWrapper>
            <BackgroundImage />
            <ProductList products={data} />
          </BackgroundWrapper>
        </ContentLayout>
      </PageLayout>
    </ContentWrapper>
  );
};

export default ProductPage;
