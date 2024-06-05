import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Image = ({ src, alt }) => (
  <StyledImage src={src} alt={alt} />
);

export default Image;
