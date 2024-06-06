import styled from "styled-components";

export const CheckoutButton = styled.button`
  padding: 15px;
  background: #2ecc71;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  &:hover {
    background: #27ae60;
  }
`;

export const WishlistButton = styled(CheckoutButton)`
  background: #3498db;
  &:hover {
    background: #2980b9;
  }
`;
