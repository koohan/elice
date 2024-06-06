import React from 'react';
import { StyledText, StyledSkeleton } from './styles/SkeletonStyles';

const Text = ({ children, type, isLoading }) => {
  const width = type === 'h2' ? '100%' : '100%';
  const height = type === 'h2' ? '1.25rem' : '1rem';
  
  if (isLoading) {
    return <StyledSkeleton width={width} height={height} />;
  }
  return <StyledText type={type}>{children}</StyledText>;
};

export default Text;
