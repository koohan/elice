import React from 'react';
import { ColorSelectorStyled } from './styles/ColorSelectorStyles';
import {SizeLabel} from './styles/SizeSelectorStyles';

const basicColors = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Black', value: '#000' },
  { name: 'white', value: '#FFF' },
];

const ColorSelector = () => {
  return (
    <ColorSelectorStyled>
      <SizeLabel  style={{marginBottom: "20px"}}>색상</SizeLabel>
      <select>
        <option value="">색상 선택</option>
        {basicColors.map((color, index) => (
          <option key={index} value={color.value}>{color.name}</option>
        ))}
      </select>
    </ColorSelectorStyled>
  );
};

export default ColorSelector;
