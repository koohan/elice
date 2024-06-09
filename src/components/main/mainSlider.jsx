import React, { useEffect, useState } from 'react';
import { ImageBtn, Slider } from './Slider';
import { ButtonContainer, PageIndicator } from './styled/mainSlider';
import PrevSrc from '../../assets/prevbtn.webp';
import NextSrc from '../../assets/nextbtn.webp';
import imageData from './imageData';

const Sliders = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentPage(currentPage => (currentPage + 1) % imageData.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [imageData.length]);

  const totalPage = imageData.length;

  const handlePrevClick = () => {
    setCurrentPage(currentPage => currentPage > 0 ? currentPage - 1 : totalPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage => currentPage < totalPage - 1 ? currentPage + 1 : 0);
  };

  return (
    <>
      <div>
        <Slider images={imageData} currentPage={currentPage} />
      </div>
      <ButtonContainer>
        <ImageBtn src={PrevSrc} alt="Prev" onClick={handlePrevClick} />
        <PageIndicator>{currentPage + 1} / {totalPage}</PageIndicator>
        <ImageBtn src={NextSrc} alt="Next" onClick={handleNextClick} />
      </ButtonContainer>
    </>
  );
};

export default Sliders;
