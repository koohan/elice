import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 40px;
    height: 40px;    
    padding: 8px;    
    border: none;    
    border-radius: 4px;   
    background-color: transparent;     
    cursor: pointer;
    display: flex;     
    align-items: center;
    justify-content: center;
`;

const ImageBtn = ({ src, alt, onClick }) => {
    return (
        <Button onClick={onClick}>
            <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Button>
    );
};

export default ImageBtn;
