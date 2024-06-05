import React from 'react';
import styled from 'styled-components';

const StyledShoppingButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ShoppingButton = ({ children, onClick }) => (
  <StyledShoppingButton onClick={onClick}>{children}</StyledShoppingButton>
);

export default ShoppingButton;
