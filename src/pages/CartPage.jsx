import React from 'react';
import CombinedTemplate from '../components/cart/CombinedTemplate';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';

const CartPage = () => {
  const user = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };

  const items = [
    {
      id: 1,
      product: {
        image: 'https://via.placeholder.com/64',
        name: '제품 1',
        description: '제품 설명 1',
        price: 30000
      },
      quantity: 2
    },
    {
      id: 2,
      product: {
        image: 'https://via.placeholder.com/64',
        name: '제품 2',
        description: '제품 설명 2',
        price: 50000
      },
      quantity: 1
    },
    {
      id: 3,
      product: {
        image: 'https://via.placeholder.com/64',
        name: '제품 3',
        description: '제품 설명 3',
        price: 100000
      },
      quantity: 1
    }
  ];

  const totalAmount = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <PageLayout>
      <SidebarLayout>
        <Sidebar user={user} />
      </SidebarLayout>
      <ContentLayout>
        <CombinedTemplate items={items} totalAmount={totalAmount} />
      </ContentLayout>
    </PageLayout>
  );
};

export default CartPage;
