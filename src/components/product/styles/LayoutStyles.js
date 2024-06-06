import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 50px;
`;

export const Items = styled.div`
  flex: 1 1 22%;
  box-sizing: border-box;
  display: flex;
`;

export const Card = styled.div`
  padding: 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  padding: 5px;
  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
    border-radius: 5px;
  }
`;
