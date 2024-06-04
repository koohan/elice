import React from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
    width: 100%;
    padding: 16px;
    background-color: #A999DD;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0 25px 0;

    &:hover {
        background-color: #8076A0;
    }
`;

function LoginBtn() {
    return (
        <LoginButton type="submit">Login</LoginButton>
    );
}

export default LoginBtn;
