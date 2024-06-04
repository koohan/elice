import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  display: flex;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
  width: 250px; 
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.02); 
    transition: transform 0.2s ease-in-out; 
  }
`;

const RelateImg = ({ src, alt }) => {
  return <ThumbnailImage src={src} alt={alt} />;
};

export default RelateImg;
