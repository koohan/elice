import React from 'react';
import { QuantitySelectorStyled } from './styles/QuantitySelectorStyles';

const QuantitySelector = () => {
  const quantities = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <QuantitySelectorStyled>
      <label>수량</label>
      <select>
        {quantities.map((quantity, index) => (
          <option key={index} value={quantity}>{quantity}</option>
        ))}
      </select>
    </QuantitySelectorStyled>
  );
};

export default QuantitySelector;
