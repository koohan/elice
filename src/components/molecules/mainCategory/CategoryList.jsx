import React from "react";
import styled from "styled-components";
import ImageBtn from "../../atoms/mainCategory/ImgBtn";

const Container = styled.div`
    width: 1280px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

function CategoryList({ images, categories }) {
    return (
        <Container>
            {images.map((imgSrc, index) => (
                <ImageBtn key={index} imgSrc={imgSrc} category={categories[index]} />
            ))}
        </Container>
    );
}

export default CategoryList;
