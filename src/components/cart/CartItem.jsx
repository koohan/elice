import React from 'react';
import { CartItemContainer, CartItemImageContainer, CartItemInfo, CartItemPrice } from './Styles/CartItemStyles';
import { StyledButton } from './Styles/ButtonStyles'; 
import Image from './Image';
import Label from './Label';

const CartItem = ({ product, quantity }) => (
  <CartItemContainer>
    <CartItemImageContainer>
      <Image src={product.image} alt={product.name} />
    </CartItemImageContainer>
    <CartItemInfo>
      <Label size="18px" style={{ fontWeight: 'bold' }}>{product.name}</Label>
      <Label size="14px" style={{ color: '#aaa' }}>{product.description}</Label>
      <CartItemPrice>
        <Label size="18px" style={{ fontWeight: 'bold' }}>
          {(product.price * quantity).toLocaleString('ko-KR')}원
          <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
            ({quantity} x {product.price.toLocaleString('ko-KR')}원)
          </span>
        </Label>
        <StyledButton variant="delete">삭제하기</StyledButton>
      </CartItemPrice>
    </CartItemInfo>
  </CartItemContainer>
);

export default CartItem;
