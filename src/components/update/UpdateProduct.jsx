import React from "react";
import ProductDetails from "./ProductDetails";

const UpdateProduct = ({ data, onChange, onAddImage }) => {
  return (
    <>
      <ProductDetails data={data} onChange={onChange} onAddImage={onAddImage}/>
    </>
  );
};

export default UpdateProduct;
