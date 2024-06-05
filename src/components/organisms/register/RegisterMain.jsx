import React from 'react';
import styled from 'styled-components';
import RegisterBox from '../../molecules/register/RegisterBox';

const RegisterContainerWrapper = styled.div`
    width: 480px;
    margin: 0 auto;
    padding: 40px 100px 40px 100px;
    border: 1px solid #EEEAFB;
    border-radius: 25px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .06);

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #554C71;
    }
`;

const RegisterContainer = () => (
    <RegisterContainerWrapper>
        <h2>Register</h2>
        <RegisterBox />
    </RegisterContainerWrapper>
);

export default RegisterContainer;
