import styled from "styled-components";

export const ImgBtn = styled.button`
  background: transparent;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;

  img {
    width: 150px;
    height: 150px;
    border-radius: 12px;
    background-color: #d8d8d8;
  }

  span {
    margin-top: 20px;
    color: #0c0e46;
    font-size: 16px;
    font-family: var(--font-nanumfont);
  }
`;

export const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
