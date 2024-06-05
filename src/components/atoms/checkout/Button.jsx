import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  padding: 10px 20px;
  background-color: #000; 
  color: white; 
  border: none;
  border-radius: 8px; 
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: #333;
  }
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;