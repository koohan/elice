import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: 1px solid #E2DCF7;
    border-radius: 5px;
    font-size: 15px;
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;

    &:focus-within {
        border: 1px solid #554C71;
        outline: none;
    }
`;

const PlaceholderSpan = styled.span`
    margin: 0 0 15px 0;
    font-size: 15px;
    color: #424242;
    font-weight: bold;
`;

const LoginInput = ({ type, placeholder }) => {
    return (
        <>
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
            <StyledInput type={type} placeholder={placeholder} />
        </>
    );
};

export default LoginInput;
