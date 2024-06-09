import React from 'react';
import { Button, SlideContainer, Image, ProductName, SliderContainer, SliderWrapper } from './styled/mainSlider';

const ImageBtn = ({ src, alt, onClick }) => (
    <Button onClick={onClick}>
        <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Button>
);

function Slider({ images, currentPage }) {
    const length = images.length;

    if (length === 0) {
        return null;
    }

    const sliderStyle = {
        transform: `translateX(-${currentPage * (100 / length)}%)`,
        transition: 'transform 0.5s ease-out',
        width: `${length * 100}%`,
    };

    const Slide = ({ src, alt, name }) => (
        <SlideContainer>
            <Image src={src} alt={alt} />
            <ProductName>{name}</ProductName>
        </SlideContainer>
    );

    return (
        <SliderContainer>
            <SliderWrapper style={sliderStyle}>
                {images.map((image, index) => (
                    <Slide key={index} src={image.src} alt={`slide-${index}`} name={image.name} />
                ))}
            </SliderWrapper>
        </SliderContainer>
    );
}

export { ImageBtn, Slider };
