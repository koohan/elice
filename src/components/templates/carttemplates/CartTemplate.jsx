import React from 'react';
import styled from 'styled-components';
import CartList from '../../organisms/cartorganisms/CartList';
import CartSummary from '../../organisms/cartorganisms/CartSummary';
import Button from '../../atoms/cartAtoms/Button';
import ShoppingButton from '../../atoms/cartAtoms/ShoppingButton';

const Container = styled.div`
  width: 800px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`;

const CartTemplate = ({ items }) => (
  <Container>
    <CartList items={items} />
    <CartSummary />
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <ShoppingButton>쇼핑하기</ShoppingButton>
      <Button>결제하기</Button>
    </div>
  </Container>
);

export default CartTemplate;
