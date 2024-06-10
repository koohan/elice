import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border: 1px solid #7485BC;
  border-bottom: 2px solid #8690AE;
  border-right: 2px solid #8690AE;
  margin-bottom: 20px;
  background-color: #FEFEFF;
  border-radius: 8px;
  padding: 20px;
`;

export const CartItemImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CartItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
