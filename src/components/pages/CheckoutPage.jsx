import React from 'react';
import CheckoutTemplate from "../checkout/CheckoutTemplate"

const items = [
  {
    imageUrl: 'https://via.placeholder.com/64',
    name: '제품 1',
    color: '빨강',
    size: 'L',
    price: 30000,
    quantity: 2
  },
  {
    imageUrl: 'https://via.placeholder.com/64',
    name: '제품 2',
    color: '파랑',
    size: 'M',
    price: 50000,
    quantity: 1
  }
];

const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

const CheckoutPage = () => {
  return (
    <div>
      <CheckoutTemplate items={items} total={total} />
    </div>
  );
}

export default CheckoutPage;