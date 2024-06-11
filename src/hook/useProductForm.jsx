import { useState } from 'react';

const useProductForm = (url) => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    category: '',
    description: '',
    longdescription: '',
    price: '',
    images: [] 
  });

  const handleProductChange = (field, value) => {
    setProduct(prevProduct => {
      if (field === 'images') {
        return {
          ...prevProduct,
          images: [...prevProduct.images, value]
        };
      }
      return {
        ...prevProduct,
        [field]: value
      };
    });
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        const newProduct = await response.json();
        console.log("Product added:", newProduct);
      } else {
        const errorData = await response.json();
        console.error("Failed to add product:", response.status, errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return { product, handleProductChange, handleAddProduct };
};

export default useProductForm;
