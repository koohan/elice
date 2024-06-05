import React from 'react';
import styled from 'styled-components';

const OptionButton = styled.button`
  display: flex;
  width : 100%;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${props => (props.selected ? '#f0f0f0' : '#fff')};
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;

  svg {
    font-size: 24px;
    margin-bottom: 8px;
  }

  &:hover {
    border-color: #000;
    background-color: #f0f0f0;
  }
`;

const PaymentOptionButton = ({ icon, label, selected, onClick }) => (
  <OptionButton selected={selected} onClick={onClick}>
    {icon}
    {label}
  </OptionButton>
);

export default PaymentOptionButton;