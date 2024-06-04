import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';



const StyledImage = styled.img`
  width: 40vw;
  height: 80%;  
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Image = ({ src, alt}) => {

  return  (
    <StyledImage src={src} alt={alt} />
  )
};

export default Image;
