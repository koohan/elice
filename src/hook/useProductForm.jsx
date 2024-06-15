import { useState } from 'react';

const useProductForm = (apiUrl) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    longdescription: '',
    images: []
  });

  const handleProductChange = (field, value) => {
    setProductData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleAddProduct = async (selectedCategory, selectedBrand) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...productData, category: selectedCategory, brand: selectedBrand }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    handleProductChange,
    handleAddProduct,
    productData,
  };
};

export default useProductForm;
