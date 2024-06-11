import styled from "styled-components";

export const ColorSelectorStyled = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
  }
  select {
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
  }
`;

export const QuantitySelectorStyled = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
  }

  .quantity-control {
    display: flex;
    align-items: center;

    button {
      background-color: #000;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      width: 70%;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: #333;
      }
    }

    input {
      text-align: center;
      border: 1px solid #ddd;
      width: 100%;
      height: 2.5rem;
      padding-left: 15px;
      font-size: 20px;
      margin: 0 10px;
      pointer-events: none;
    }
  }
`;
