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
    width: 71%;
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
      background-color: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        background-color: #e0e0e0;
      }
    }

    input {
      text-align: center;
      border: 1px solid #ddd;
      width: 70px;
      height: 2.5rem;
      padding-left: 15px;
      font-size: 20px;
      margin: 0 10px;
      pointer-events: none;
    }
  }
`;
