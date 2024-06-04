import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slide from '../../atoms/mainSlider/Slide';

const SlideContainer = styled.div`
  display: flex;
  width: 1280px;
  height: 430px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: ${props => props.$isAnimating ? 'transform 1s ease-in-out' : 'none'};
  transform: translateX(${props => -props.$currentIndex * 1280}px);
`;

const Slider = ({ images, currentPage }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const length = images.length;

  useEffect(() => {
    setIsAnimating(true);
  }, [currentPage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <SlideContainer>
      <SliderWrapper $currentIndex={currentPage - 1} $isAnimating={isAnimating}>
        {images.map((image, index) => (
          <Slide key={index} src={image.src} alt={`slide-${index}`} name={image.name} />
        ))}
      </SliderWrapper>
    </SlideContainer>
  );
};

export default Slider;
