import styled from "styled-components";

export const SizeSelectorContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SizeLabel = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 15px;
`;

export const SizeButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const SizeButton = styled.button`
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;
