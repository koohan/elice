import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/productDetail/Input';
import RadioButton from '../../atoms/productDetail/RadioButton';

const OptionContainer = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const ProductOptions = () => {
  return (
    <>
      <OptionContainer>
        <Label>색상</Label>
        <RadioGroup>
          <RadioButton name="color" value="검정" label="검정" />
          <RadioButton name="color" value="하양" label="하양" />
          <RadioButton name="color" value="파랑" label="파랑" />
        </RadioGroup>
      </OptionContainer>
      <OptionContainer>
        <Label>사이즈</Label>
        <RadioGroup>
          <RadioButton name="size" value="XS" label="XS" />
          <RadioButton name="size" value="S" label="S" />
          <RadioButton name="size" value="M" label="M" />
          <RadioButton name="size" value="L" label="L" />
          <RadioButton name="size" value="XL" label="XL" />
        </RadioGroup>
      </OptionContainer>
      <OptionContainer>
        <Label>수량</Label>
        <Input type="number" name="quantity" min="1" max="10" width="50px" />
      </OptionContainer>
    </>
  );
};

export default ProductOptions;
