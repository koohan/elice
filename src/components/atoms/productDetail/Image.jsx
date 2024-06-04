import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';



const StyledImage = styled.img`
  width: 40vw;
  height: 85%;  
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Thumbnailimage = styled.img`
  width: 100px;
  height: 80px;  
  object-fit: cover;
  border-radius: 10px;
  margin-top : 15px;
  cursor : pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1); 
    transition: transform 0.2s ease-in-out; 
  }
`;


const Image = ({ src, alt}) => {

  return  (
    <>
    <StyledImage src={src} alt={alt} />
    <div style={{ alignItems: "center",justifyContent : "center", display : "flex" , flexDirection : "row" ,  gap : "30px"}}>
    <Thumbnailimage src={src} alt={alt} />
    <Thumbnailimage src={src} alt={alt} />
    <Thumbnailimage src={src} alt={alt} />
    <Thumbnailimage src={src} alt={alt} />
    <Thumbnailimage src={src} alt={alt} />
    </div>
    </>
  )
};

export default Image;
