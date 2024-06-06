import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const StyledSkeleton = styled(Skeleton)`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border-radius: ${({ variant }) => (variant === "rect" ? "10px" : "10px")};
  display: block;
  object-fit: cover;
  margin: ${({ margin }) => margin || "-5px 0"};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: block;
`;

export const StyledText = styled.p`
  margin: 5px 0;
  font-size: ${({ type }) => (type === "h2" ? "1.25rem" : "1rem")};
  font-weight: ${({ type }) => (type === "h2" ? "bold" : "normal")};
  line-height: ${({ type }) => (type === "h2" ? "1.5rem" : "1.2rem")};
  display: block;
`;
