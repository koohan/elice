import React from 'react';
import CombinedTemplate from '../cart/CombinedTemplate';
import NavBar from '../organisms/nav/NavBar';

const CartPage = () => {
  const user = {
    avatar: 'https://via.placeholder.com/80',
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
      }
    },
    {
      id: 2,
      product: {
        image: 'https://via.placeholder.com/64',
        name: '제품 2',
        description: '제품 설명 2',
        price: 50000
      }
    }
  ];

  return (
    <div className="app">
      <CombinedTemplate user={user} items={items} />
    </div>
  );
};

export default CartPage;
