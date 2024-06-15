import React, { useState } from "react";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { AddProductLayOut } from "./styles/AddProductLayOut";
import useProductForm from "../../hook/useProductForm";
import Notification from "../notification/Notification";
import useFetchOptions from "../../hook/useFetchOptions";

const ProductRoot = () => {
  const apiUrl = "/api/admin/products";
  const brandUrl = "/api/brand";
  const categoryUrl = "/api/category";
  const navigate = useNavigate();
  const { handleProductChange, handleAddProduct, productData } = useProductForm(apiUrl);
  const { brands, categories, loading, error } = useFetchOptions(brandUrl, categoryUrl);
  const [notification, setNotification] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleButtonClick = () => {
    if (!selectedCategory || !selectedBrand || !productData.images || productData.images.length === 0) {
      console.error("Category, Brand, and Images are required.");
      setNotification("필수 항목들을 입력해주세요!");
      return;
    }
    handleAddProduct(selectedCategory, selectedBrand);
    setNotification("제품이 성공적으로 등록되었습니다.");
    setTimeout(() => setNotification(""), 1000);
    setTimeout(() => navigate(-1), 1500);
  };
  

  const handleFormChange = (field, value) => {
    handleProductChange(field, value);
  };

  return (
    <div style={{ paddingTop: "5rem", height: "100%" }}>
      {notification && <Notification message={notification} />}
      <div style={{ display: "flex", width: "80%", height: "5rem", justifyContent: "space-between", alignItems: "center", margin: "0 auto" }}>
        <TitleStyled>제품 추가</TitleStyled>
      </div>
      <AddProductLayOut>
        <AddProduct
          onChange={handleFormChange}
          brands={brands}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setSelectedBrand={setSelectedBrand}
        />
        <div style={{ display: "flex", height: "5rem", justifyContent: "end", alignItems: "center", margin: "0 auto" }}>
          <ButtonStyled onClick={handleButtonClick}>저장</ButtonStyled>
        </div>
      </AddProductLayOut>
    </div>
  );
};

export default ProductRoot;
