import React from 'react';
import styled from 'styled-components';
import RegisterMain from '../../organisms/register/RegisterMain';
import SubRegister from '../../molecules/register/SubRegister';

const RegisterMainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const RegisterContainer = () => (
    <RegisterMainContainer>
        <RegisterMain />
        <SubRegister />
    </RegisterMainContainer>
);

export default RegisterContainer;
