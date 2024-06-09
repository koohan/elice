import React from 'react';
import { Container, ImgBtn } from './styled/mainCategory';

function CategoryList({ images, categories }) {
    const ImageBtn = ({ imgSrc, category }) => (
        <ImgBtn>
            <img src={imgSrc} alt={category} />
            <span>{category}</span>
        </ImgBtn>
    );

    if (!images || !categories) { 
        return <div>데이터 0</div>;
    }

    return (
        <Container>
            {images.map((imgSrc, index) => (
                <ImageBtn key={index} imgSrc={imgSrc} category={categories[index]} />
            ))}
        </Container>
    );
}

export default CategoryList;
