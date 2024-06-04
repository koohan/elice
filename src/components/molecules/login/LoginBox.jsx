import React from 'react';
import LoginInput from '../../atoms/login/LoginInput';
import LoginBtn from '../../atoms/login/LoginBtn';

const LoginBox = () => (
    <form>
        <LoginInput type="email" placeholder="이메일" />
        <LoginInput type="password" placeholder="비밀번호" />
        <LoginBtn />
    </form>
);

export default LoginBox;
