import React, { useState, useEffect, useRef } from 'react';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';
import useFetchData from '../hook/useFetchData'; 

const ProductPage = () => {
  const { data, loading, error } = useFetchData("/api/product");
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef('');

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = () => {
    const queryLower = searchInputRef.current.toLowerCase();
    const filtered = data.filter(product => {
      const name = product.name ? product.name.toLowerCase() : '';
      return name.includes(queryLower);
    });
    setFilteredData(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="app">
      <NavBar setSearchQuery={handleSearch} searchInputRef={searchInputRef} />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          <ProductList products={filteredData} />
        </ContentLayout>
      </PageLayout>
    </div>
  );
};

export default ProductPage;
