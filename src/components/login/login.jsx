import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import googleLogo from '../../assets/google.webp';
import naverLogo from '../../assets/naver.webp';
import kakaoLogo from '../../assets/kakao.webp';
import appleLogo from '../../assets/apple.webp';
import poster from '../../assets/poster.png';
import usePostRequest from '../../hook/usePostRequest';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { data, loading, error, postData } = usePostRequest('http://localhost:8000/api/users/login');

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        await postData({ email, password });
    };

    useEffect(() => {
        if (data) {
            localStorage.setItem('token', data.token); 
            navigate('/'); 
        }
    }, [data, navigate]);

    return (
        <>
            <div className='container'>
                <div className='border'>
                    <img className="poster" src={poster} alt="Poster" />
                    <div className="main-container">
                        <div className="login-container">
                            <h2 id="title">LOGIN</h2>
                            <form onSubmit={handleLogin}>
                                <div className='login-box'>
                                    <div className="email">
                                        <input 
                                            type="email" 
                                            placeholder="이메일 입력" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='pw'>
                                        <input 
                                            type="password" 
                                            placeholder="비밀번호 입력" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <button className='login-btn' type="submit" disabled={loading}>
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
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
                            <button className='register' onClick={() => handleNavigation('/register')}>회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
