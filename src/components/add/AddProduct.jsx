import React, { useState } from 'react';
import { ButtonStyled, TitleStyled, StyledSelect, StyledInput, StyledTextarea } from "./styles/Content";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const categories = ["남성 상의", "남성 하의", "여성 상의", "여성 하의", "아동 상의", "아동 하의"];

const AddProduct = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, '')); 
    setPrice(numberValue.toLocaleString('ko-KR')); 
  };

  return (
    <CategoryLayOut>
      <TitleStyled style={{ marginBottom: "1.5rem" }}>카테고리</TitleStyled>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: "1.5rem" }}>
        <StyledSelect>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </StyledSelect>
        <StyledInput type="text" placeholder="새 카테고리 이름" />
        <ButtonStyled>카테고리 생성</ButtonStyled>
      </div>
      <TitleStyled style={{ marginBottom: "1.5rem" }}>제품</TitleStyled>
      <StyledInput type="text" placeholder="제품 이름" />
      <StyledTextarea placeholder="제품 설명" />
      <div style={{ display: 'flex', gap: '10px', marginBottom: "0.5rem" }}>
        <StyledInput 
          type="text" 
          placeholder="가격" 
          value={price} 
          onChange={handlePriceChange} 
        />
        <StyledInput 
          type="text" 
          placeholder="수량" 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <ButtonStyled>제품 생성</ButtonStyled>
    </CategoryLayOut>
  );
};

export default AddProduct;
