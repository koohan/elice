import React, { useState, useRef, useEffect } from "react";
import { StyledInput, StyledTextarea, ButtonStyled } from "./styles/Content";
import { CategoryLayOut } from "./styles/UpdateProductLayOut";

const ProductDetails = ({ data, onChange }) => {
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const imageUrlRef = useRef("");

  useEffect(() => {
    if (data.price) {
      setPrice(data.price.toLocaleString("ko-KR"));
    }
  }, [data.price]);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, ""));
    setPrice(numberValue.toLocaleString("ko-KR"));
    onChange('price', numberValue);
  };

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
      <StyledInput
        type="text"
        placeholder="제품 이름"
        value={data.name}
        onChange={(e) => onChange('name', e.target.value)}
      />
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
          value={data.quantity || ''}
          onChange={(e) => onChange('quantity', e.target.value)}
        />
      </div>
      <StyledTextarea
        style={{height : "2.5rem"}}
        placeholder="제품 설명"
        value={data.description || ''}
        onChange={(e) => onChange('description', e.target.value)}
      />
      <StyledTextarea
        value={data.longdescription || ''}
        placeholder="제품 상세 설명"
        onChange={(e) => onChange('longdescription', e.target.value)}
      />
       <div style={{ display: 'flex', gap: '10px' }}>
        <StyledInput
          type="text"
          placeholder="이미지 주소 추가"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <ButtonStyled style={{ height: "38px" }} onClick={handleAddImageUrl}>추가</ButtonStyled>
      </div>
    </CategoryLayOut>
  );
};

export default ProductDetails;
