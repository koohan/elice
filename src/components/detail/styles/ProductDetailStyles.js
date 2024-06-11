import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 98%;
  min-height: 85%;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProductDescriptionStyled = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color: #666;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  color: #000;
  margin: 2rem 0;
`;

export const CommonTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;
