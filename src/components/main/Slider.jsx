import React from 'react';
import { Button, SlideContainer, Image, SliderContainer, SliderWrapper } from './styled/mainSlider';

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
        transform: `translateX(-${currentPage * 100}%)`,
    };

    return (
        <SliderContainer>
            <SliderWrapper style={sliderStyle}>
                {images.map((image, index) => (
                    <SlideContainer key={index} style={{ backgroundColor: image.bgColor }}>
                        <Image src={image.src} alt={`slide-${index}`} />
                    </SlideContainer>
                ))}
            </SliderWrapper>
        </SliderContainer>
    );
}

export { ImageBtn, Slider };
