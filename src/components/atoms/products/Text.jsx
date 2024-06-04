import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  margin: 10px 0;
  font-size: ${({ type }) => (type === 'h2' ? '1.25rem' : '1rem')};
  font-weight: ${({ type }) => (type === 'h2' ? 'bold' : 'normal')};
`;

const Text = ({ children, type }) => {
  return <StyledText type={type}>{children}</StyledText>;
};

export default Text;
