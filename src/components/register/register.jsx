import React, { useState } from 'react';
import useRegister from '../../hook/useRegister.jsx'
import { 
    RegisterButton, 
    StyledInput, 
    PlaceholderSpan, 
    LineContainer,
    Line, 
    OauthContainer, 
    RegisterContainerWrapper, 
    RegisterMainContainer 
} from './register.js';
import googleLogo from '../../assets/google.webp';
import naverLogo from '../../assets/naver.webp';
import kakaoLogo from '../../assets/kakao.webp';
import appleLogo from '../../assets/apple.webp';

const RegisterBtn = ({ loading }) => {
    return (
        <RegisterButton type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
        </RegisterButton>
    );
};

const RegisterInput = ({ type, placeholder, value, onChange }) => {
    return (
        <>
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
            <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    );
};

const RegisterBox = () => {
    const { register, loading, error, success } = useRegister();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        setPasswordError('');
        await register(name, email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <RegisterInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <RegisterInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <RegisterInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <RegisterInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <RegisterBtn loading={loading} />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Registration successful!</p>}
        </form>
    );
};

const Oauth = () => (
    <>
        <LineContainer>
            <Line />
            <div>Register in seconds</div>
            <Line />
        </LineContainer>
        <OauthContainer>
            <button className='google-login'><img src={googleLogo} alt="Google Login" /></button>
            <button className='naver-login'><img src={naverLogo} alt="Naver Login" /></button>
            <button className='kakao-login'><img src={kakaoLogo} alt="Kakao Login" /></button>
            <button className='apple-login'><img src={appleLogo} alt="Apple Login" /></button>
        </OauthContainer>
    </>
);

const RegisterContainer = () => (
    <RegisterContainerWrapper>
        <h2>회원가입</h2>
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