import React from 'react';
import { ProductDetailLayOut } from "./styles/AddProductLayOut";
import { StyledTextarea } from "./styles/Content";

const AddProductDetail = ({ onChange }) => {
  return (
    <ProductDetailLayOut>
      <p style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>제품 상세 설명</p>
      <StyledTextarea onChange={(e) => onChange('longdescription', e.target.value)}></StyledTextarea>
    </ProductDetailLayOut>
  );
};

export default AddProductDetail;
