import React from 'react';
import { StyledImage } from './styles/SkeletonStyles';

const Image = ({ src, alt }) => {

  return src ? (
    <StyledImage src={src} alt={alt} />
  ) : null;
};

export default Image;
