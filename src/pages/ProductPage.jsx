import React from 'react';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';

const ProductPage = () => {
  const user = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };
  const products = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 1',
      description: '제품 설명 1',
      price: '₩30,000'
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 2',
      description: '제품 설명 2',
      price: '₩50,000'
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 3',
      description: '제품 설명 3',
      price: '₩70,000'
    },
    {
      id: 4,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 4',
      description: '제품 설명 4',
      price: '₩90,000'
    },
    {
      id: 5,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 5',
      description: '제품 설명 5',
      price: '₩110,000'
    },
    {
      id: 6,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 6',
      description: '제품 설명 6',
      price: '₩130,000'
    },
    {
      id: 7,
      imageSrc: 'https://via.placeholder.com/150',
      name: '제품 7',
      description: '제품 설명 7',
      price: '₩150,000'
    }
  ];

  return (
    <div className="app">
      <NavBar/>
      <PageLayout>
      <SidebarLayout>
        <Sidebar user={user} />
      </SidebarLayout>
      <ContentLayout>
      <ProductList products={products} />
      </ContentLayout>
    </PageLayout>
    </div>
  );
};

export default ProductPage;
