import React from 'react';
import styled from 'styled-components';
import CartItem from '../../molecules/cartmolecules/CartItem';

const CartListContainer = styled.div`
  padding: 20px;
`;

const CartListHeader = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: flex-start; 
  margin-bottom: 4rem;
`;

const CartListTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
`;

const CartList = ({ items }) => (
  <CartListContainer>
    <CartListHeader>
      <CartListTitle>장바구니</CartListTitle>
      <span>결제 전에 품목을 확인하세요</span>
    </CartListHeader>
    {items.map(item => (
      <CartItem
        key={item.id}
        product={item.product}
      />
    ))}
  </CartListContainer>
);

export default CartList;
