import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/detail/ProductDetail';

const DetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/product/${productId}`);
        const data = await response.json();

        console.log('Fetched product data:', data);

        const { product, variants } = data;

        if (!product || !product.category || !product.category._id) {
          throw new Error('Product data is incomplete');
        }

        setProduct(product);
        setVariants(variants);

        const relatedResponse = await fetch(`http://localhost:8000/api/category/${product.category._id}`);
        const relatedProductsData = await relatedResponse.json();
        setRelatedProducts(relatedProductsData.filter(p => p._id !== productId));
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductDetail
      product={product}
      variants={variants}
      relatedProducts={relatedProducts}
    />
  );
};

export default DetailPage;
