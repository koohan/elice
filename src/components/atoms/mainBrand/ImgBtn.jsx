import React from 'react';
import styled from 'styled-components';
import WishlistButton from '../productDetail/WishlistButton';

const ImgBtn = styled.button`
    background: transparent;
    margin: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;

    img {
        width: 400px;
        height: 240px;
    }

    span {
        margin-top: 10px;
        color: #222222;
        font-size: 14px;
    }
`;

function ImageBtn({ imgSrc, brand }) {
    return (
        <>
            <ImgBtn>
                <img src={imgSrc} alt={brand} />
            </ImgBtn>
            <div>
                <span>{brand}</span>
                <WishlistButton />
            </div>
        </>
    );
}

export default ImageBtn;
