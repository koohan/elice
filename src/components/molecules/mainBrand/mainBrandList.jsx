import React, { useRef, useState } from "react";
import styled from "styled-components";
import ImageBtn from "../../atoms/mainBrand/ImgBtn";

const Container = styled.div`
    width: 1280px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    cursor: grab;
    border : 2px solid #ddd;
    padding : 20px;
    
    &::-webkit-scrollbar {
        display: none;
    }

    &:active {
        cursor: grabbing;
    }
`;

function BrandList({ images, brands }) {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    if (!images || !brands || images.length === 0 || brands.length === 0) {
        return <div>데이터를 불러오는 중...</div>;
    }

    return (
        <Container
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {images.map((imgSrc, index) => (
                <ImageBtn
                    key={index}
                    imgSrc={imgSrc}
                    brand={brands[index]}
                />
            ))}
        </Container>
    );
}

export default BrandList;
