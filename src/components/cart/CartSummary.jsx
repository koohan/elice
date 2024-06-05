import React from 'react';
import { SummaryContainer } from './Styles/CartSummaryStyles';
import Label from './Label';

const CartSummary = () => (
  <SummaryContainer>
    <Label>총 금액:</Label>
    <h2>$0.00</h2>
  </SummaryContainer>
);

export default CartSummary;
