import React from 'react';
import { CartItemContainer, CartItemImageContainer, CartItemInfo, CartItemPrice } from './Styles/CartItemStyles';
import { StyledButton } from './Styles/ButtonStyles'; 
import Image from './Image';
import Label from './Label';

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
        <StyledButton variant="delete">Remove</StyledButton>
      </CartItemPrice>
    </CartItemInfo>
  </CartItemContainer>
);

export default CartItem;
