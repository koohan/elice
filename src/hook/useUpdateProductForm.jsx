import { useState, useEffect } from 'react';

const useUpdateProductForm = (apiUrl, productId) => {
  const [productData, setProductData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchProduct();
  }, [apiUrl, productId]);

  const handleUpdateProduct = async (updatedProductData) => {
    if (!updatedProductData.images || updatedProductData.images.length === 0) {
      setUpdateError('이미지를 추가해주세요!');
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProductData),
      });
      if (!response.ok) throw new Error('Failed to update product');
    } catch (error) {
      setUpdateError(error.message);
    }
  };

  return {
    productData,
    fetchLoading,
    fetchError,
    setProductData,
    handleUpdateProduct,
    updateError,
  };
};

export default useUpdateProductForm;
