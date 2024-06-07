import React, { useState } from "react";
import PriceData from "./PriceData";
import ProductList from "./ProductList";
import { Container } from "./styles/GlobalLayout";
import { HeaderContainer } from "./styles/BoardLayout";
import { ProductInput, ProductButton, PaginationButton, PaginationContainer,PaginationMainContainer } from "./styles/ProductLayout";
import { CommonTitle } from "./styles/FontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(data.productList.length / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const paginatedProductList = data.productList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
    <Container>
      <HeaderContainer>
        <CommonTitle>대시보드</CommonTitle>
        <div style={{ position: "relative", width: "350px" }}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          />
          <ProductInput
            placeholder="제품 검색..."
            style={{ paddingLeft: "40px" }}
          />
        </div>
      </HeaderContainer>
      <PriceData priceData={data.priceData} />
      <HeaderContainer>
        <CommonTitle>제품 목록</CommonTitle>
        <div style={{ position: "relative", width: "300px" }}>
          <ProductButton>제품 추가하기</ProductButton>
        </div>
      </HeaderContainer>
      <ProductList productList={paginatedProductList} />
    </Container>
    <PaginationMainContainer>
    <PaginationContainer>
         <PaginationButton onClick={() => handlePageChange(currentPage - 1)}>
           -
         </PaginationButton>
         <span>{currentPage}</span>
         <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
           +
         </PaginationButton>
       </PaginationContainer>
       </PaginationMainContainer>
       </>
  );
};

export default Dashboard;
