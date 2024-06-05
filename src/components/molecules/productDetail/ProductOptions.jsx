import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/productDetail/Input';
import RadioButton from '../../atoms/productDetail/RadioButton';
import Label from '../../atoms/productDetail/Label';

const OptionContainer = styled.div`
  margin: 10px 0;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const ProductOptions = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const renderRadioButtons = (name, options) => {
    return (
      <RadioGroup>
        {options.map(option => (
          <RadioButton key={option.value} name={name} value={option.value} label={option.label} />
        ))}
      </RadioGroup>
    );
  };

  return (
    <>
      <OptionContainer>
        <Label>사이즈</Label>
        {renderRadioButtons('size', [
          { value: 'XS', label: 'XS' },
          { value: 'S', label: 'S' },
          { value: 'M', label: 'M' },
          { value: 'L', label: 'L' },
          { value: 'XL', label: 'XL' },
        ])}
      </OptionContainer>
      <OptionContainer>
        <Label>수량</Label>
        <Input value={quantity} onChange={handleQuantityChange} maxQuantity={99} width="100px" />
      </OptionContainer>
    </>
  );
};

export default ProductOptions;
