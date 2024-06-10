import React from 'react';
import { OauthContainer, BtnContainer } from '../register/styles/OauthContainerStyles';
import googleLogo from '../../assets/google.webp';
import naverLogo from '../../assets/naver.webp';
import kakaoLogo from '../../assets/kakao.webp';
import appleLogo from '../../assets/apple.webp';

const Oauth = () => (
  <OauthContainer>
    <BtnContainer className='google-login'><img src={googleLogo} alt="Google 로그인" /></BtnContainer>
    <BtnContainer className='naver-login'><img src={naverLogo} alt="Naver 로그인" /></BtnContainer>
    <BtnContainer className='kakao-login'><img src={kakaoLogo} alt="Kakao 로그인" /></BtnContainer>
    <BtnContainer className='apple-login'><img src={appleLogo} alt="Apple 로그인" /></BtnContainer>
  </OauthContainer>
);

export default Oauth;