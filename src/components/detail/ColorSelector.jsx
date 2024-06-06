import React from 'react';
import { ColorSelectorStyled } from './styles/ProductDetailStyles';

const ColorSelector = ({ colors }) => {
  return (
    <ColorSelectorStyled>
      <label>색상</label>
      <select>
        <option value="">색상 선택</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
    </ColorSelectorStyled>
  );
};

export default ColorSelector;
