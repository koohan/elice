import React from "react";
import Register from "../components/register/register.jsx";
import { BlackBox, WelcomeTitle, WelcomeText, SignInButton } from "../components/register/styles/BlackBoxStyles";

const RegisterPage = () => {
    return (
        <div className="app" style={{ display: 'flex', width: '90%', height: '100vh' }}>
            <BlackBox>
                <WelcomeTitle>Welcome Back!</WelcomeTitle>
                <WelcomeText>Enter your personal details to use all of site features</WelcomeText>
                <SignInButton>SIGN IN</SignInButton>
            </BlackBox>
            <div style={{ width: "50%" }}>
                <Register />
            </div>
        </div>
    );
}

export default RegisterPage;