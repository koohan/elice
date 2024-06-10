import React from "react";
import Register from "../components/register/register.jsx";
import {
  BlackBox,
  WelcomeTitle,
  WelcomeText,
  SignInButton,
} from "../components/register/styles/BlackBoxStyles";
import { AnimatedwhitekBox } from "../components/login/styles/LoginStyles.js";
import useAnimation from "../hook/useAnimaiton";

const RegisterPage = () => {

    const [boxRef, isBoxVisible] = useAnimation();


  return (
    <div style={{ display: "flex", width: "90%", height: "100vh" }}>
      <AnimatedwhitekBox  ref={boxRef}
        className={isBoxVisible ? 'visible' : ''}>
        <WelcomeTitle>Welcome Back!</WelcomeTitle>
        <WelcomeText>
          Enter your personal details to use all of site features
        </WelcomeText>
        <SignInButton>SIGN IN</SignInButton>
      </AnimatedwhitekBox>
      <div style={{ width: "50%" }}>
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
