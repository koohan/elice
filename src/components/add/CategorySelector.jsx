import React from "react";
import { StyledSelect, StyledInput } from "./styles/Content";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const categories = [
  "기존 카테고리",
  "남성 상의",
  "남성 하의",
  "여성 상의",
  "여성 하의",
  "아동 상의",
  "아동 하의",
];

const brand = [
  "기존 브랜드",
  "나이키",
  "아디다스",
  "스파이더",
  "뉴발란스",
  "언더아머",
];

const CategorySelector = () => {
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
        <StyledSelect style={{ marginBottom: "35px" }}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </StyledSelect>

        <StyledSelect style={{ marginBottom: "35px" }}>
          {brand.map((brand, index) => (
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
      />
      <StyledInput
        type="text"
        placeholder="새 브랜드 이름"
        style={{ marginBottom: "35px" }}
      />
            <StyledInput
        type="text"
        placeholder="이미지 주소 추가"
        style={{ marginBottom: "35px" }}
      />
    </CategoryLayOut>
  );
};

export default CategorySelector;
