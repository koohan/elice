import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  height: 19rem; 
  border-radius: 4px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 19rem;  
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Image = ({ src, alt, isLoading }) => {
  if (isLoading) {
    return <StyledSkeleton />;
  }

  return src ? (
    <StyledImage src={src} alt={alt} />
  ) : null;
};

export default Image;
