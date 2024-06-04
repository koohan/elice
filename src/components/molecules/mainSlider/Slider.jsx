import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide from '../../atoms/mainSlider/Slide';

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 430px;
  overflow: hidden;
  position: relative;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  transform: translateX(${props => -props.$currentIndex * 620}px);
`;

const Slider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 2) % images.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [images, interval]);

  return (
    <SlideContainer>
      <SliderWrapper $currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`slide-${index}`} />
        ))}
      </SliderWrapper>
    </SlideContainer>
  );
};

export default Slider;
