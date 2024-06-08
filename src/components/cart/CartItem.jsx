import React from 'react';
import { CartItemContainer, CartItemImageContainer, CartItemInfo, CartItemPrice } from './Styles/CartItemStyles';
import { StyledButton } from './Styles/ButtonStyles'; 
import Image from './Image';
import Label from './Label';

const CartItem = ({ product, stock }) => {

  const { image, name, description, price } = product;
  const totalPrice = (price * stock).toLocaleString('ko-KR');
  const unitPrice = price.toLocaleString('ko-KR');

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <Image src={image} alt={name} />
      </CartItemImageContainer>
      <CartItemInfo>
        <Label size="18px" style={{ fontWeight: 'bold' }}>{name}</Label>
        <Label size="14px" style={{ color: '#aaa' }}>{description}</Label>
        <CartItemPrice>
          <Label size="18px" style={{ fontWeight: 'bold' }}>
            {totalPrice}원
            <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
              ({stock} x {unitPrice}원)
            </span>
          </Label>
          <StyledButton variant="delete">삭제하기</StyledButton>
        </CartItemPrice>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItem;
