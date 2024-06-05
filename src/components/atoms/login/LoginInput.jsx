import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: 1px solid #E2DCF7;
    border-radius: ${(props) => (props.type === 'email' ? '5px 5px 0 0' : '0 0 5px 5px')};
    font-size: 15px;
    border-bottom: ${(props) => (props.type === 'email' ? '0.5px solid #EEEAFB' : '1px solid #E2DCF7')};
    border-top: ${(props) => (props.type === 'password' ? '0.5px solid #EEEAFB' : '1px solid #E2DCF7')};

    &:focus {
        border: 1px solid #554C71;
        outline: none;
    }
`;

const LoginInput = ({ type, placeholder }) => {
    return <Input type={type} placeholder={placeholder} />;
};

export default LoginInput;
