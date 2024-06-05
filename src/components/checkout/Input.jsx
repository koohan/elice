import React from 'react';
import { InputWrapper, Label, StyledInput, StyledInputHigh } from './styles/InputStyles';

const Input = ({ label, high, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    {high ? <StyledInputHigh {...props} /> : <StyledInput {...props} />}
  </InputWrapper>
);

export default Input;
