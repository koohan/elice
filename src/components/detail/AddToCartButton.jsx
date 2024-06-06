import React from 'react';
import { AddToCartButtonStyled } from './styles/AddToCartButtonStyles';

const AddToCartButton = ({ children }) => {
  return <AddToCartButtonStyled>{children}</AddToCartButtonStyled>;
};

export default AddToCartButton;
