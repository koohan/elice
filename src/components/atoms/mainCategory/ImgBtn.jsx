import React from 'react';
import styled from 'styled-components';

const ImgBtn = styled.button`
    background: transparent;
    margin: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;

    img {
        width: 90px;
        height: 90px;
        border-radius: 12px;
        background-color: #D8D8D8;
    }

    span {
        margin-top: 10px;
        color: #222222;
        font-size: 14px;
    }
`;

function ImageBtn({ imgSrc, category }) {
    return (
        <ImgBtn>
            <img src={imgSrc} />
            <span>{category}</span>
        </ImgBtn>
    );
}

export default ImageBtn;
