import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ImgBtn, EtcContainer, Wrapper, AddtoWishlistButton, Container } from './styled/mainBrand';

const WishlistButton = ({ children, onClick }) => (
    <AddtoWishlistButton onClick={onClick}>
        <FontAwesomeIcon icon={faHeart} />
        {children}
    </AddtoWishlistButton>
);

function ImageBtn({ imgSrc, brand }) {
    return (
        <Wrapper>
            <ImgBtn>
                <img src={imgSrc} alt={brand} />
            </ImgBtn>
            <EtcContainer>
                <span>{brand}</span>
                <WishlistButton />
            </EtcContainer>
        </Wrapper>
    );
}

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
        return <div>데이터 0</div>;
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
                    imgSrc={imgSrc}
                    brand={brands[index]}
                />
            ))}
        </Container>
    );
}

export default BrandList;
