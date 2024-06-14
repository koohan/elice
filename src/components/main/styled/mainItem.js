import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border: 1px solid #7485bc;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const Brand = styled.div`
  margin-bottom: 20px;
  display: flex;
  height: 500px;
`;

export const BrandImage = styled.img`
  width: 50%;
  max-width: 50%;
  min-width: 50%;
  height: 100%;
  border: 1px solid #aaa;
  border-radius: 10px;
  object-fit: cover;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const StyledButton = styled.button`
  flex: 1;
  border: none;
  font-size: 15px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  color: #0c0e46;
  font-family: var(--font-nanumfont);

  &.selected {
    background-color: #d1dcfd;
    border-radius: 10px;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 100%;
  justify-content: center;
  gap: 10px;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border: 1px solid #aaa;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ProductNameSmall = styled(ProductName)`
  font-size: 14px;
  margin-bottom: 4px;
  opacity: 0.7;
`;

export const ProductNameMedium = styled(ProductName)`
  font-size: 16px;
`;
