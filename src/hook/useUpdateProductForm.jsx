import { useState, useEffect } from 'react';

const useUpdateProductForm = (apiUrl, productId) => {
  const [productData, setProductData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        setFetchError(error);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchProduct();
  }, [apiUrl, productId]);

  const handleUpdateProduct = async (updatedProductData) => {
    setUpdating(true);
    try {
      const response = await fetch(`${apiUrl}/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductData),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      alert('Product updated successfully');
    } catch (error) {
      setUpdateError(error);
    } finally {
      setUpdating(false);
    }
  };

  return {
    productData,
    fetchLoading,
    fetchError,
    setProductData,
    handleUpdateProduct,
    updateError,
    updating,
  };
};

export default useUpdateProductForm;
