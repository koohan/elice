import React from "react";
import CategorySelector from "./CategorySelector";
import ProductDetails from "./Product";

const AddProduct = ({ onChange, onAddImage }) => {
  return (
    <>
      <ProductDetails onChange={onChange} />
      <CategorySelector onChange={onChange} onAddImage={onAddImage} />
    </>
  );
};

export default AddProduct;
