import React from 'react';
import { ProductDetailLayOut} from "./styles/AddProductLayOut";
import { TitleStyled , StyledTextarea} from "./styles/Content"

const AddProductDetail = () => {
  return (
    <ProductDetailLayOut>
      <p style={{marginBottom : "1.5rem", fontSize : "1rem"}}>제품 상세 설명</p>
     <StyledTextarea ></StyledTextarea>
    </ProductDetailLayOut>
  );
};

export default AddProductDetail;
