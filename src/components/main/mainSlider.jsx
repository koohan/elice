import React, { useEffect, useState } from "react";
import {
  SlideContainer,
  Image,
  SliderContainer,
  SliderWrapper,
} from "./styled/mainSlider";
import imageData from "./imageData";

const Sliders = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentPage((currentPage) => (currentPage + 1) % imageData.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const sliderStyle = {
    transform: `translateX(-${currentPage * 100}%)`,  
  };

  return (
    <>
      <div>
        <SliderContainer>
          <SliderWrapper style={sliderStyle}>
            {imageData.map((image, index) => (
              <SlideContainer
                key={index}
                style={{ backgroundColor: image.bgColor }}
              >
                <Image src={image.src} alt={`slide-${index}`} />
              </SlideContainer>
            ))}
          </SliderWrapper>
        </SliderContainer>
      </div>
    </>
  );
};

export default Sliders;
