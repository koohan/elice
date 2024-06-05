import React from 'react';
import styled from 'styled-components';

const RegisterButton = styled.button`
    width: 100%;
    padding: 16px;
    background-color: #A999DD;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px 0 0 0;

    &:hover {
        background-color: #8076A0;
    }
`;

function RegisterBtn() {
    return (
        <RegisterButton type="submit">회원가입</RegisterButton>
    );
}

export default RegisterBtn;
