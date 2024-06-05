import React from 'react';
import RegisterInput from '../../atoms/register/RegisterInput';
import RegisterBtn from '../../atoms/register/RegisterBtn';

const LoginBox = () => (
    <form>
        <RegisterInput type="name" placeholder="이름" />
        <RegisterInput type="email" placeholder="이메일" />
        <RegisterInput type="password" placeholder="비밀번호" />
        <RegisterInput type="confirmpassword" placeholder="비밀번호 확인" />
        <RegisterBtn />
    </form>
);

export default LoginBox;
