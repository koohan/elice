//사이드바 테스트용입니다.
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import {  SidebarLayout } from '../cart/Styles/LayoutStyles';

const CartPage = () => {
  const user = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };

  


  return (
      <SidebarLayout>
        <Sidebar user={user} />
      </SidebarLayout>
  );
};

export default CartPage;
