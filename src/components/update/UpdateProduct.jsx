import React from "react";
import ProductDetails from "./ProductDetails";
import CategoryDetails from "./CategoryDetails";
import { CategoryLayOut } from "./styles/UpdateProductLayOut";

const UpdateProduct = ({ data, onChange, onAddImage,brands, categories }) => {
  return (
    <CategoryLayOut>
      <ProductDetails data={data} onChange={onChange} onAddImage={onAddImage}/>
      <CategoryDetails brands={brands} categories={categories} onChange={onChange} />
    </CategoryLayOut>
  );
};

export default UpdateProduct;
