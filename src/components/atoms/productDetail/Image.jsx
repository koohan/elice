import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';



const StyledImage = styled.img`
  width: 40vw;
  height: 85%;  
  object-fit: cover;
  border-radius: 10px;
  cursor : pointer;
`;

const Thumbnailimage = styled.img`
  width: 100px;
  height: 80px;  
  object-fit: cover;
  border-radius: 10px;
  margin-top : 15px;
  cursor : pointer;
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
