import React from 'react';
import styled from 'styled-components';
import LoginMain from '../../organisms/login/LoginMain';
import LoginSub from '../../organisms/login/LoginSub';

const LoginMainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LoginContainer = () => (
    <LoginMainContainer>
        <LoginMain />
        <LoginSub />
    </LoginMainContainer>
);

export default LoginContainer;
