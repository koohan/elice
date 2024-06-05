import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/cartAtoms/Label';

const SummaryContainer = styled.div`
  display : flex;
  padding: 20px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: right;
  justify-content : space-between;
`;

const CartSummary = () => (
  <SummaryContainer>
    <Label>총 금액:</Label>
    <h2>$0.00</h2>
  </SummaryContainer>
);

export default CartSummary;
