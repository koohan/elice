import React from "react";
import CategorySelector from "./CategorySelector";
import ProductDetails from "./ProductDetails";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const AddProduct = ({ onChange, brands, categories, setSelectedCategory, setSelectedBrand }) => {
  return (
    <CategoryLayOut>
      <ProductDetails onChange={onChange} />
      <CategorySelector 
        onChange={onChange} 
        brands={brands} 
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setSelectedBrand={setSelectedBrand}
      />
    </CategoryLayOut>
  );
};

export default AddProduct;
