import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  font-size: ${(props) => props.size};
  color: #333;
  margin-bottom: 10px;
`;

const Label = ({ children, size }) => (
  <StyledLabel size={size}>{children}</StyledLabel>
);

export default Label;
