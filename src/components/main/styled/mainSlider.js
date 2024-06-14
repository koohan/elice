import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 1280px;
  height: 400px;
  object-fit: contain;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 430px;
  overflow: hidden;
  align-items: center;
  margin: 0 auto;
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  width: fit-content;
`;
