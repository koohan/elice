import React from 'react';
import './login.css';

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
