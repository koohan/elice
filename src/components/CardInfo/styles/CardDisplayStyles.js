import styled from "styled-components";

export const CardImage = styled.div`
  width: 100%;
  max-width: 800px;
  height: 250px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
`;

export const CardDetails = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

export const CardNumber = styled.div`
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

export const CardHolder = styled.div`
  font-size: 1rem;
  margin-top: 10px;
`;

export const ExpirationDate = styled.div`
  font-size: 1rem;
  margin-top: 10px;
`;
