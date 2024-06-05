import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 40vw;
  height: 85%;  
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ThumbnailImage = styled.img`
  width: 100px;
  height: 80px;  
  object-fit: cover;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1); 
    transition: transform 0.2s ease-in-out; 
  }
`;

const Image = ({ src, alt }) => (
  <>
    <StyledImage src={src} alt={alt} />
    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
      {[...Array(5)].map((_, index) => (
        <ThumbnailImage key={index} src={src} alt={alt} />
      ))}
    </div>
  </>
);

export default Image;
