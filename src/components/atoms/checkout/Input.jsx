import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 1; 
`;

const StyledInputHigh = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 2; 
`;

export const Input = ({ label, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <StyledInput {...props} />
  </InputWrapper>
);

export const InputHigh = ({ label, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <StyledInputHigh {...props} />
  </InputWrapper>
);