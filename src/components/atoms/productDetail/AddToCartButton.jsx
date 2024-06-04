import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #333;
  }
`;

const AddToCartButton = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default AddToCartButton;
