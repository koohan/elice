import React from 'react';
import './login.css';
import googleLogo from './google.webp';
import naverLogo from './naver.webp'
import kakaoLogo from './kakao.webp'
import appleLogo from './apple.webp'

function Login() {
    return (
        <>
            <div className="main-container">
                <div className="login-container">
                    <h2>Login</h2>
                    <form>
                        <div className='login-box'>
                            <div className="email">
                                <input type="email" placeholder="이메일 입력" />
                            </div>
                            <div className='pw'>
                                <input type="password" placeholder="비밀번호 입력" />
                            </div>
                        </div>
                        <button className='login-btn' type="submit">Login</button>
                    </form>
                    <div className='line-container'>
                        <div className='line'></div>
                        <div>간편 로그인</div>
                        <div className='line'></div>
                    </div>
                    <div className="oauth-container">
                        <button className='google-login'><img src={googleLogo} alt="Google 로그인" /></button>
                        <button className='naver-login'><img src={naverLogo} alt="Naver 로그인" /></button>
                        <button className='kakao-login'><img src={kakaoLogo} alt="Kakao 로그인" /></button>
                        <button className='apple-login'><img src={appleLogo} alt="Apple 로그인" /></button>
                    </div>
                </div>
                <div className='sub-container'>
                    <button className='findPW'>비밀번호 찾기</button>
                    <p className='dot'> • </p>
                    <button className='register'>회원가입</button>
                </div>
                <br /><br />
                <footer>
                    @@@@@@@@@여기 푸터 들어가야함@@@@@@@@@
                </footer>
            </div>
        </>
    );
}

export default Login;
