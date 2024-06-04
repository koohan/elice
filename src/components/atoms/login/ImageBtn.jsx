import React from 'react';
import styled from 'styled-components';

const OauthButton = styled.button`
    background: none;
    color: inherit;
    font-size: 14px;
    border: none;
    padding: 2px 25px 0 25px;
    margin: 0;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }
`;

function ImageBtn({ imgSrc, altText }) {
    return (
        <OauthButton>
            <img src={imgSrc} alt={altText} />
        </OauthButton>
    );
}

export default ImageBtn;
