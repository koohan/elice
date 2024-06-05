import React from 'react';
import { 
    RegisterButton, 
    StyledInput, 
    PlaceholderSpan, 
    LineContainer, 
    OauthContainer, 
    RegisterContainerWrapper, 
    RegisterMainContainer 
} from './register.js';
import googleLogo from '../../assets/google.webp';
import naverLogo from '../../assets/naver.webp';
import kakaoLogo from '../../assets/kakao.webp';
import appleLogo from '../../assets/apple.webp';

const RegisterBtn = () => {
    return (
        <RegisterButton type="submit">회원가입</RegisterButton>
    );
}

const RegisterInput = ({ type, placeholder }) => {
    return (
        <>
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
            <StyledInput type={type} placeholder={placeholder} />
        </>
    );
};

const RegisterBox = () => (
    <form>
        <RegisterInput type="name" placeholder="이름" />
        <RegisterInput type="email" placeholder="이메일" />
        <RegisterInput type="password" placeholder="비밀번호" />
        <RegisterInput type="confirmpassword" placeholder="비밀번호 확인" />
        <RegisterBtn />
    </form>
);

const Oauth = () => (
    <>
        <LineContainer>
            <div>1초 회원가입</div>
        </LineContainer>
        <OauthContainer>
            <button className='google-login'><img src={googleLogo} /></button>
            <button className='naver-login'><img src={naverLogo} /></button>
            <button className='kakao-login'><img src={kakaoLogo} /></button>
            <button className='apple-login'><img src={appleLogo} /></button>
        </OauthContainer>
    </>
);

const RegisterContainer = () => (
    <RegisterContainerWrapper>
        <h2>Register</h2>
        <RegisterBox />
    </RegisterContainerWrapper>
);

const Register = () => (
    <RegisterMainContainer>
        <RegisterContainer />
        <Oauth />
    </RegisterMainContainer>
);

export default Register;
