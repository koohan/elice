import React, { useEffect, useState } from 'react';
import { ImageBtn, Slide, Slider } from './Slider'
import { ButtonContainer, PageIndicator } from './styled/mainSlider';
import PrevSrc from '../../assets/prevbtn.webp';
import NextSrc from '../../assets/nextbtn.webp';

const Sliders = () => {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        const images = data.products.map(product => ({
          src: product.imageSrc,
          name: product.name
        }));
        setImageData(images);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentPage(currentPage => (currentPage + 1) % imageData.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [imageData.length]);

  const totalPage = imageData.length;

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  return (
    <>
      <div>
        <Slider images={imageData} currentPage={currentPage} />
      </div>
      <ButtonContainer>
        <ImageBtn
          src={PrevSrc}
          alt="Prev"
          onClick={handlePrevClick}
        />
        <PageIndicator>{currentPage + 1} / {totalPage}</PageIndicator>
        <ImageBtn
          src={NextSrc}
          alt="Next"
          onClick={handleNextClick}
        />
      </ButtonContainer>
    </>
  );
};

export default Sliders;
