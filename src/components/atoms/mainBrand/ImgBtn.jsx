import React from 'react';
import styled from 'styled-components';
import WishlistButton from './WishlistButton';

const ImgBtn = styled.button`
    background: transparent;
    margin: 0;
    cursor: pointer;
    border: none;

    img {
        width: 400px;
        height: 240px;
        border: 1px solid #333;
        object-fit: cover; 
    }
`;

const EtcContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px 0 5px;

    span {
        color: #333;
        font-weight: bold;
        font-size: 16px;
        user-select: none;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
`;

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

export default ImageBtn;
