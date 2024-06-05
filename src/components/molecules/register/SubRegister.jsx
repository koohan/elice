import React from 'react';
import styled from 'styled-components';
import googleLogo from '../../../assets/google.webp';
import naverLogo from '../../../assets/naver.webp';
import kakaoLogo from '../../../assets/kakao.webp';
import appleLogo from '../../../assets/apple.webp';

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #554C71;
  margin-top: 20px;
`;

const OauthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin-bottom: 5px;

  button {
    background: none;
    color: inherit;
    font-size: 14px;
    border: none;
    padding: 2px 25px 0 25px;
    margin: 0;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const Oauth = () => (
    <>
        <LineContainer>
            <div>1초 회원가입</div>
        </LineContainer>
        <OauthContainer>
            <button className='google-login'><img src={googleLogo} alt="Google Sign in" /></button>
            <button className='naver-login'><img src={naverLogo} alt="Naver Sign in" /></button>
            <button className='kakao-login'><img src={kakaoLogo} alt="Kakao Sign in" /></button>
            <button className='apple-login'><img src={appleLogo} alt="Apple Sign in" /></button>
        </OauthContainer>
    </>
);

export default Oauth;
