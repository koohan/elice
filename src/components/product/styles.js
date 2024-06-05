import styled, { createGlobalStyle } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 16px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  justify-content: space-between;
  padding: 50px;
`;

export const Items = styled.div`
  flex: 0 1 calc(25% - 1px);
  box-sizing: border-box;
`;

export const Card = styled.div`
  padding: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  height: 19rem;
  border-radius: 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 19rem;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const StyledText = styled.p`
  margin: 10px 0;
  font-size: ${({ type }) => (type === "h2" ? "1.25rem" : "1rem")};
  font-weight: ${({ type }) => (type === "h2" ? "bold" : "normal")};
`;
