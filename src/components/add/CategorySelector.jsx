import React, { useState, useRef } from "react";
import { StyledSelect, StyledInput, ButtonStyled } from "./styles/Content";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const categories = [
  "기존 카테고리",
  "남성 상의",
  "남성 하의",
  "여성 상의",
  "여성 하의"
];

const brands = [
  "기존 브랜드",
  "나이키",
  "아디다스",
  "푸마"
];

const CategorySelector = ({ onChange }) => {
  const [imageUrl, setImageUrl] = useState("");
  const imageUrlRef = useRef("");

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    imageUrlRef.current = e.target.value;
  };

  const handleAddImageUrl = () => {
    if (imageUrlRef.current.trim()) {
      onChange('images', imageUrlRef.current);
      setImageUrl(""); 
    }
  };

  return (
    <CategoryLayOut>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          width: "100%",
        }}
      >
        <StyledSelect style={{ marginBottom: "35px" }} onChange={(e) => onChange('category', e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </StyledSelect>

        <StyledSelect style={{ marginBottom: "35px" }} onChange={(e) => onChange('brand', e.target.value)}>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </StyledSelect>
      </div>

      <StyledInput
        type="text"
        placeholder="새 카테고리 이름"
        style={{ marginBottom: "35px" }}
        onChange={(e) => onChange('newCategory', e.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="새 브랜드 이름"
        style={{ marginBottom: "35px" }}
        onChange={(e) => onChange('newBrand', e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <StyledInput
          type="text"
          placeholder="이미지 주소 추가"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <ButtonStyled style={{height : "38px"}} onClick={handleAddImageUrl}>추가</ButtonStyled>
      </div>
    </CategoryLayOut>
  );
};

export default CategorySelector;
