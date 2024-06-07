import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

export const ProductGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ProductInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;
