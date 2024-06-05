import React, { useState, useEffect } from 'react';
import { Button, SlideContainer, Image, ProductName, SliderContainer, SliderWrapper } from './styled/mainSlider';

const ImageBtn = ({ src, alt, onClick }) => {
    return (
        <Button onClick={onClick}>
            <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Button>
    );
};

const Slide = ({ src, alt, name }) => {
    return (
        <SlideContainer>
            <Image src={src} alt={alt} />
            <ProductName>{name}</ProductName>
        </SlideContainer>
    );
};

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
        <SliderContainer>
            <SliderWrapper $currentIndex={currentPage - 1} $isAnimating={isAnimating}>
                {images.map((image, index) => (
                    <Slide key={index} src={image.src} alt={`slide-${index}`} name={image.name} />
                ))}
            </SliderWrapper>
        </SliderContainer>
    );
};

export { ImageBtn, Slide, Slider };
