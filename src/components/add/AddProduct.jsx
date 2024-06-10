import React, { useState } from 'react';
import { ButtonStyled, TitleStyled, StyledSelect, StyledInput, StyledTextarea } from "./styles/Content";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const categories = [ '기존 카테고리',"남성 상의", "남성 하의", "여성 상의", "여성 하의", "아동 상의", "아동 하의"];
const size = ["사이즈", "XS", "S", "M", "L", "XL"];
const brand = ["기존 브랜드","나이키", "아디다스", "스파이더", "뉴발란스", "언더아머"];

const AddProduct = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, '')); 
    setPrice(numberValue.toLocaleString('ko-KR')); 
  };

  return (
    <>
    <CategoryLayOut>
      <TitleStyled style={{ marginBottom: "1.5rem" }}>카테고리</TitleStyled>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <StyledSelect style={{marginBottom : '1.5rem'}}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </StyledSelect>
        <StyledInput type="text" placeholder="새 카테고리 이름" style={{marginBottom : '1.5rem'}} />
        <StyledSelect style={{marginBottom : '1.5rem'}}>
          {brand.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </StyledSelect>
        <StyledInput type="text" placeholder="새 브랜드 이름" style={{marginBottom : '1.5rem'}}/>
        <ButtonStyled>카테고리 생성</ButtonStyled>
        </div>
    </CategoryLayOut>
    <CategoryLayOut>

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
          placeholder="색상" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: "0.5rem" }}>
      <StyledInput 
          type="text" 
          placeholder="수량" 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      <StyledSelect>
      {size.map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
           </StyledSelect>
      </div>
      <ButtonStyled style={{marginTop : '15px'}}>제품 생성</ButtonStyled>
      </CategoryLayOut>
      </>
  );
};

export default AddProduct;
