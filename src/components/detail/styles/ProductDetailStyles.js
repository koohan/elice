import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 8px;
  gap: 8px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
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
  margin-bottom: 10px;
`;

export const ProductDescriptionStyled = styled.div`
  margin: 20px 0;
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
