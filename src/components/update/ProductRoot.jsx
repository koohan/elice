import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { UpdateProductLayOut } from "./styles/UpdateProductLayOut";
import useUpdateProductForm from '../../hook/useUpdateProductForm';

const ProductRoot = () => {
  const { id } = useParams();
  const apiUrl = '/api/product';

  const {
    productData,
    fetchLoading,
    fetchError,
    setProductData,
    handleUpdateProduct,
    updateError,
    updating,
  } = useUpdateProductForm(apiUrl, id);

  if (fetchLoading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  const handleProductChange = (key, value) => {
    setProductData(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveProduct = () => {
    handleUpdateProduct(productData);
  };

  return (
    <div style={{ padding: "50px", width: "100%", height: "auto", marginBottom: "5rem" }}>
      <div style={{ display: "flex", width: "50%", margin: "0 auto" }}>
        <TitleStyled>제품 정보 수정</TitleStyled>
      </div>
      <UpdateProductLayOut>
        <UpdateProduct data={productData} onChange={handleProductChange} />
      </UpdateProductLayOut>
      <div style={{ display: "flex", width: "50%", margin: "0 auto", marginTop: "15px", justifyContent: "end" }}>
        <ButtonStyled onClick={handleSaveProduct} disabled={updating}>
          {updating ? '업데이트 중...' : '제품 업데이트'}
        </ButtonStyled>
      </div>
      {updateError && <div>Error: {updateError.message}</div>}
    </div>
  );
};

export default ProductRoot;
