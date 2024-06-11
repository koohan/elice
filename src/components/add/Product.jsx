import React, { useState } from "react";
import { StyledInput, StyledTextarea } from "./styles/Content";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const ProductDetails = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, ""));
    setPrice(numberValue.toLocaleString("ko-KR"));
  };

  return (
    <CategoryLayOut>
      <StyledInput type="text" placeholder="제품 이름"  />
      <StyledTextarea placeholder="제품 설명" />
      <div style={{ display: "flex", gap: "15px" }}>
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
