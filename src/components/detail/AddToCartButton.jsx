import React from 'react';
import { AddToCartButtonStyled } from './styles/ProductDetailStyles';

const AddToCartButton = ({ children }) => {
  return <AddToCartButtonStyled>{children}</AddToCartButtonStyled>;
};

export default AddToCartButton;
