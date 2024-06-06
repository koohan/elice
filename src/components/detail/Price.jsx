import React from 'react';
import { Price as PriceStyled } from './styles/ProductDetailStyles';

const Price = ({ amount }) => {
  const formatCurrency = (amount) => {
    return amount.toLocaleString('ko-KR')
  };

  return <PriceStyled>{formatCurrency(amount)}원</PriceStyled>;
};

export default Price;
