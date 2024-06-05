import React from 'react';
import { StyledLabel } from './Styles/CommonStyles';

const Label = ({ children, size }) => (
  <StyledLabel size={size}>{children}</StyledLabel>
);

export default Label;
