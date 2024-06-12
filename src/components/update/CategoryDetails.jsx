import React from "react";
import { StyledInput, StyledSelect } from "./styles/Content";
import { CategoryLayOut } from "./styles/UpdateProductLayOut";

const CategoryDetails = ({ brands, categories, onChange }) => {
  return (
    <div>
        <StyledSelect onChange={(e) => onChange('brand', e.target.value)}>
          <option value="">브랜드 선택</option>
          {brands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </StyledSelect>
        <div style={{ display: "flex", gap: "10px" }}>
          <StyledSelect onChange={(e) => onChange('category', e.target.value)}>
            <option value="">카테고리 선택</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </StyledSelect>
        </div>
    </div>
  );
};

export default CategoryDetails;
