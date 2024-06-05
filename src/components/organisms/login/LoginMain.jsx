import React from 'react';
import styled from 'styled-components';
import LoginBox from '../../molecules/login/LoginBox';
import Oauth from '../../molecules/login/oauth';

const LoginContainerWrapper = styled.div`
    width: 480px;
    margin: 0 auto;
    padding: 40px 80px 40px 80px;
    border: 1px solid #EEEAFB;
    border-radius: 25px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .06);

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #554C71;
    }
`;

const LoginContainer = () => (
    <LoginContainerWrapper>
        <h2>Login</h2>
        <LoginBox />
        <Oauth />
    </LoginContainerWrapper>
);

export default LoginContainer;
