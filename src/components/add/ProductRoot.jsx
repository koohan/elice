import React from 'react';
import AddProduct from './AddProduct';
import AddProductDetail from './AddProductDetail';
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { AddProductLayOut } from "./styles/AddProductLayOut";

const ProductRoot = () => {
  return (
    <div style={{ padding: "50px", width: "100%", height: "auto", marginBottom: "5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginBottom: "1rem"  }}>
        <TitleStyled>제품</TitleStyled>
        <ButtonStyled>제품 추가</ButtonStyled>
      </div>
      <AddProductLayOut style={{ display: "flex", gap: "20px" }}>
        <AddProduct />
      </AddProductLayOut>
      <AddProductDetail />
    </div>
  );
};

export default ProductRoot;
