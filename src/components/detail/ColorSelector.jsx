import React from 'react';
import { ColorSelectorStyled } from './styles/ColorSelectorStyles';
import { SizeLabel } from './styles/SizeSelectorStyles';

const basicColors = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Black', value: '#000' },
  { name: 'White', value: '#FFF' },
];

const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
  const availableColors = colors.length > 0 ? colors : basicColors;

  return (
    <ColorSelectorStyled>
      <SizeLabel style={{ marginBottom: "20px" }}>색상</SizeLabel>
      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="">색상 선택</option>
        {availableColors.map((color, index) => (
          <option key={index} value={color.name}>{color.name}</option>
        ))}
      </select>
    </ColorSelectorStyled>
  );
};

export default ColorSelector;
