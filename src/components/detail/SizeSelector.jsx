import React from 'react';
import { SizeSelectorContainer, SizeLabel, SizeButtonGroup, SizeButton } from './styles/SizeSelectorStyles';

const SizeSelector = ({ selectedSize, setSelectedSize }) => {
  return (
    <SizeSelectorContainer>
      <SizeLabel>사이즈</SizeLabel>
      <SizeButtonGroup>
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <SizeButton
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{ backgroundColor: selectedSize === size ? 'gray' : 'white' }}
          >
            {size}
          </SizeButton>
        ))}
      </SizeButtonGroup>
    </SizeSelectorContainer>
  );
};

export default SizeSelector;
