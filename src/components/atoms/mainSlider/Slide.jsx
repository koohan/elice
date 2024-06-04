import React from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  width: 620px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const Image = styled.img`
  width: 620px;
  height: 400px;
  object-fit: cover;
`;

const ProductName = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
`;

const Slide = ({ src, alt, name }) => {
  return (
    <SlideContainer>
      <Image src={src} alt={alt} />
      <ProductName>{name}</ProductName>
    </SlideContainer>
  );
};

export default Slide;
