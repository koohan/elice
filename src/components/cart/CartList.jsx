import React from 'react';
import { CartListContainer, CartListHeader, CartListTitle } from './Styles/CartListStyles';
import CartItem from './CartItem';

const CartList = ({ items, onDelete }) => {
  return (
    <CartListContainer>
      <CartListHeader>
        <CartListTitle>장바구니</CartListTitle>
        <span>결제 전에 품목을 확인하세요</span>
      </CartListHeader>
      {items.length === 0 ? (
        <p style={{ fontSize: "20px", textAlign: "center" }}>장바구니가 비어있습니다.</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            product={item.product}
            stock={item.quantity}
            selectedColor={item.selectedColor}
            selectedSize={item.selectedSize}
            onDelete={() => onDelete(item.id)}
          />
        ))
      )}
    </CartListContainer>
  );
};

export default CartList;
