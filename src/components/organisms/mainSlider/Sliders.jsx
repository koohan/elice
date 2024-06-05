import React, { useEffect, useState } from 'react';
import Slider from '../../molecules/mainSlider/Slider';
import ImageBtn from '../../atoms/mainSlider/ImageBtn';
import styled from 'styled-components';
import PrevSrc from '../../../assets/prevbtn.webp';
import NextSrc from '../../../assets/nextbtn.webp'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageIndicator = styled.span`
  margin: 0 20px;
  font-size: 16px;
`;

const Sliders = () => {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPage = Math.ceil(imageData.length / 2);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
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
        <PageIndicator>{currentPage} / {totalPage}</PageIndicator>
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
