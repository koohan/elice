import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Input = ({ value, onChange }) => (
  <StyledInput type="text" value={value} onChange={onChange} />
);

export default Input;
