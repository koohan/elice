import React from 'react';
import styled from 'styled-components';

const RadioLabel = styled.label`
  display: flex;
  width: 3rem;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s;
`;

const Span = styled.span`
  text-align: right;
  width: 70%; 
`;

const RadioButton = ({ label, ...props }) => (
  <RadioLabel>
    <input type="radio" {...props} />
    <Span>{label}</Span>
  </RadioLabel>
);

export default RadioButton;
