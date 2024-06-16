import React from 'react';
import { OauthContainer, BtnContainer } from '../register/styles/OauthContainerStyles';

const Oauth = () => {
  const handleGoogleLogin = () => {
    window.location.href="/auth/google";
  }
  return(
  <OauthContainer>
    <BtnContainer className='google-login' onClick={handleGoogleLogin}><img src="/assets/google.webp" alt="Google 로그인" /></BtnContainer>
    <BtnContainer className='naver-login'><img src="/assets/naver.webp" alt="Naver 로그인" /></BtnContainer>
    <BtnContainer className='kakao-login'><img src="/assets/kakao.webp" alt="Kakao 로그인" /></BtnContainer>
    <BtnContainer className='apple-login'><img src="/assets/apple.webp" alt="Apple 로그인" /></BtnContainer>
  </OauthContainer>)
};

export default Oauth;
