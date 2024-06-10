import React from 'react';
import { LineContainer, Line } from './styles/LineContainerStyles';
import { OauthContainer, BtnContainer } from './styles/OauthContainerStyles';
import googleLogo from '../../assets/google.webp';
import naverLogo from '../../assets/naver.webp';
import kakaoLogo from '../../assets/kakao.webp';
import appleLogo from '../../assets/apple.webp';

const Oauth = () => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '800px', margin: '0 auto' }}>
        <LineContainer>
            <Line />
            <div>Register in seconds</div>
            <Line />
        </LineContainer>
        <OauthContainer>
            <BtnContainer className='google-login'><img src={googleLogo} alt="Google Login" /></BtnContainer>
            <BtnContainer className='naver-login'><img src={naverLogo} alt="Naver Login" /></BtnContainer>
            <BtnContainer className='kakao-login'><img src={kakaoLogo} alt="Kakao Login" /></BtnContainer>
            <BtnContainer className='apple-login'><img src={appleLogo} alt="Apple Login" /></BtnContainer>
        </OauthContainer>
    </div>
);

export default Oauth;
