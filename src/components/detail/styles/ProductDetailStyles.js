import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 8px;
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
  color: #e74c3c;
  margin: 20px 0;
`;

export const SizeSelectorContainer = styled.div`
  margin-bottom: 20px;
`;

export const SizeLabel = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
`;

export const SizeButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const SizeButton = styled.button`
  padding: 10px;
  width: 50px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const ColorSelectorStyled = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
  }
  select {
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
  }
`;

export const QuantitySelectorStyled = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
  }
  select {
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
  }
`;

export const AddToCartButtonStyled = styled.button`
  padding: 15px;
  background: #2ecc71;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  &:hover {
    background: #27ae60;
  }
`;

export const AddToWishlistButtonStyled = styled(AddToCartButtonStyled)`
  background: #3498db;
  &:hover {
    background: #2980b9;
  }
`;

export const RelatedProductsStyled = styled.div`
  margin-top: 30px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const RelatedProductItem = styled.li`
  width: 150px;
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const CommonTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;
