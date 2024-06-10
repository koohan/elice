import styled from "styled-components";

export const BlackBox = styled.div`
  background: linear-gradient(to right, #6a85b6, #bac8e0);
  width: 50%;
  height: 100%;
  border-top-right-radius: 20%;
  border-bottom-right-radius: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const WelcomeText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const SignInButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #6a85b6;
  }
`;
