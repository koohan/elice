import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width || 'auto'};
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
