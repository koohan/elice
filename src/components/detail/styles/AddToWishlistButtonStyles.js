import styled from "styled-components";

export const CheckoutButton = styled.button`
  padding: 15px;
  background: #2ecc71;
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 50%;
  font-size: 16px;
  margin-bottom: 10px;
  &:hover {
    background: #27ae60;
  }
`;

export const WishlistButton = styled(CheckoutButton)`
  background: #3498db;
  border-radius: 5px;
  &:hover {
    background: #2980b9;
  }
`;
