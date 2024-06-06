import React from 'react';
import { SizeSelectorContainer, SizeLabel, SizeButtonGroup, SizeButton } from './styles/SizeSelectorStyles';

const SizeSelector = () => {
  return (
    <SizeSelectorContainer>
      <SizeLabel>사이즈</SizeLabel>
      <SizeButtonGroup>
        <SizeButton>XS</SizeButton>
        <SizeButton>S</SizeButton>
        <SizeButton>M</SizeButton>
        <SizeButton>L</SizeButton>
        <SizeButton>XL</SizeButton>
      </SizeButtonGroup>
    </SizeSelectorContainer>
  );
};

export default SizeSelector;
