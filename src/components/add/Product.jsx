import React, { useState } from "react";
import { StyledInput, StyledTextarea } from "./styles/Content";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const ProductDetails = ({ onChange }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, ""));
    setPrice(numberValue.toLocaleString("ko-KR"));
    onChange('price', numberValue);
  };

  return (
    <CategoryLayOut>
      <StyledInput type="text" placeholder="제품 이름" onChange={(e) => onChange('name', e.target.value)} />
      <StyledTextarea placeholder="제품 설명" onChange={(e) => onChange('description', e.target.value)} />
      <div style={{ display: "flex", gap: "15px" }}>
        <StyledInput
          type="text"
          placeholder="가격"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <StyledInput
          type="text"
          placeholder="수량"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </CategoryLayOut>
  );
};

export default ProductDetails;
