import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/detail/ProductDetail';
import useFetchData from '../hook/useFetchData'; 

const DetailPage = () => {
  const { productId } = useParams();
  const productUrl = `http://localhost:8000/api/product/${productId}`;
  const { data: product, loading: productLoading, error: productError } = useFetchData(productUrl);

  const [categoryUrl, setCategoryUrl] = useState(null);
  const { data: relatedProductsData, loading: relatedProductsLoading, error: relatedProductsError } = useFetchData(categoryUrl);

  const [filteredRelatedProducts, setFilteredRelatedProducts] = useState([]);

  useEffect(() => {
    if (product && product.category && product.category._id) {
      setCategoryUrl(`http://localhost:8000/api/category/${product.category._id}`);
    }
  }, [product]);

  useEffect(() => {
    if (relatedProductsData && product) {
      setFilteredRelatedProducts(relatedProductsData.filter(p => p._id !== productId));
    }
  }, [relatedProductsData, product, productId]);

  if (productLoading || relatedProductsLoading) {
    return <div>Loading...</div>;
  }

  if (productError) {
    return <div>Error: {productError.message}</div>;
  }

  if (relatedProductsError) {
    return <div>Error: {relatedProductsError.message}</div>;
  }

  return (
    <ProductDetail
      product={product}
      relatedProducts={filteredRelatedProducts}
    />
  );
};

export default DetailPage;