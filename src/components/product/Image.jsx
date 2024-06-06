import React from 'react';
import { StyledSkeleton, StyledImage } from './styles/SkeletonStyles';

const Image = ({ src, alt, isLoading }) => {
  if (isLoading) {
    return <StyledSkeleton width="100%" height="250px" />;
  }

  return src ? (
    <StyledImage src={src} alt={alt} />
  ) : null;
};

export default Image;
