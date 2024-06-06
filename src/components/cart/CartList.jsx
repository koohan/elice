import React from 'react';
import { CartListContainer, CartListHeader, CartListTitle } from './Styles/CartListStyles';
import CartItem from './CartItem';

const CartList = ({ items }) => (
  <CartListContainer>
    <CartListHeader>
      <CartListTitle>위시리스트</CartListTitle>
      <span>결제 전에 품목을 확인하세요</span>
    </CartListHeader>
    {items.map(item => (
      <CartItem key={item.id} product={item.product}  quantity={item.quantity} />
    ))}
  </CartListContainer>
);

export default CartList;
