import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ContentLayout,
  MainContent,
  CartContainer,
} from "../../GlobalStyles/LayoutStyles";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { StyledShoppingButton } from "./Styles/ButtonStyles";

const CombinedTemplate = ({ items, totalAmount, onDelete, onDeleteAll }) => {

  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  }

  return (
    <ContentLayout>
      <MainContent>
        <CartContainer>
          <CartList items={items} onDelete={onDelete} onDeleteAll={onDeleteAll} />
          <CartSummary items={items} totalAmount={totalAmount} />
          <div style={{ display: "flex", margin: "20px", gap: "40rem" }}>
            <StyledShoppingButton   style={{ flex: 1, backgroundColor: "#97A6D9" }} onClick={handleNavigate('/products')}>쇼핑하기</StyledShoppingButton>
            <StyledShoppingButton   style={{ flex: 1, backgroundColor: "#97A6D9" }} onClick={handleNavigate('/checkouts')}>주문하기</StyledShoppingButton>
          </div>
        </CartContainer>
      </MainContent>
    </ContentLayout>
  );
}

export default CombinedTemplate;
