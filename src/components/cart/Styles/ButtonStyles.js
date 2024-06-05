import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #ce2f24;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #333;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
export const StyledShoppingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
`;
