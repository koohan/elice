import React, { useState } from 'react';
import { QuantitySelectorStyled } from './styles/ColorSelectorStyles';
import {SizeLabel} from './styles/SizeSelectorStyles';


const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prev => Math.min(prev + 1, 10)); 
  };

  const handleDecrease = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); 
  };
  
  return (
    <QuantitySelectorStyled>
      <SizeLabel style={{marginBottom: "20px"}}>수량</SizeLabel>
      <div className="quantity-control">
        <button onClick={handleDecrease}>-</button>
        <input 
          type="number" 
          value={quantity} 
          readOnly 
        />
        <button onClick={handleIncrease}>+</button>
      </div>
    </QuantitySelectorStyled>
  );
};

export default QuantitySelector;
