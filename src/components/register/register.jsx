import React from 'react';
import RegisterContainer from './RegisterContainer';
import Oauth from './Oauth';
import { RegisterMainContainer } from './styles/RegisterMainContainerStyles';

const Register = () => (
    <>
    <RegisterMainContainer>
        <RegisterContainer />
        <Oauth />
    </RegisterMainContainer>
    </>
);

export default Register;