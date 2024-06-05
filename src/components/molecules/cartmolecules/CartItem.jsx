import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/cartAtoms/Label';
import Button from '../../atoms/cartAtoms/Button';
import Image from '../../atoms/cartAtoms/Image';

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 3px solid #ddd;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`;

const CartItemImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CartItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartItem = ({ product }) => (
  <CartItemContainer>
    <CartItemImageContainer>
      <Image src={product.image} alt={product.name} />
    </CartItemImageContainer>
    <CartItemInfo>
      <Label size="18px" style={{ fontWeight: 'bold' }}>{product.name}</Label>
      <Label size="14px" style={{ color: '#aaa' }}>{product.description}</Label>
      <CartItemPrice>
        <Label size="18px" style={{ fontWeight: 'bold' }}>${product.price} x 1 (${product.price})</Label>
        <Button variant="delete">Remove</Button>
      </CartItemPrice>
    </CartItemInfo>
  </CartItemContainer>
);

export default CartItem;
