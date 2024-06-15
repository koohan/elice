import styled from "styled-components";

export const ImgBtn = styled.div`
  background: transparent;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: none;
  position: relative;

  &:hover {
    img {
      text-shadow: 2px 2px 0 #000, 3px 3px 0 #333;
    }
    button {
      color: #fff;
      text-shadow: 2px 2px 0 #000, 3px 3px 0 #333;
      transform: scale(1.01);
    }
  }

  img {
    width: 250px;
    height: 200px;
    border-radius: 50px 50px 0 50px;
    padding: 10px;
    background: linear-gradient(300deg, #d1e8ff, transparent 50%);
    transition: width 0.2s ease-in-out, height 0.3s ease;
    position: absolute;
  }

  button {
    margin-top: 250px;
    letter-spacing: 4px;
    font-style: italic;
    padding: 15px;
    border-radius: 5px;
    border: none;
    width: 250px;
    cursor: pointer;
    background: none;
    color: #333;
    font-size: 20px;
    transition: color 0.1s ease-in-out, text-shadow 0.1s ease-in-out,
      transform 0.1s ease-in-out;
  }
`;

export const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: transform 0.3s ease;
`;
