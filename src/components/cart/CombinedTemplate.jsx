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

const CombinedTemplate = ({ user, items, totalAmount }) => {

  const navigate = useNavigate()
  const handleOrderClick = () => {
    navigate('/Checkouts');
  };


return (
    <ContentLayout>
      <MainContent>
        <CartContainer>
          <CartList items={items} />
          <CartSummary items={items} totalAmount={totalAmount} />
          <div style={{ display: "flex", margin: "20px", gap: "40rem" }}>
            <StyledShoppingButton style={{ flex: 1, backgroundColor: "#000"}}>쇼핑하기</StyledShoppingButton>
            <StyledShoppingButton style={{ flex: 1, backgroundColor: "#000"}} onClick={handleOrderClick}>주문하기</StyledShoppingButton>
          </div>
        </CartContainer>
      </MainContent>
    </ContentLayout>
)
}

export default CombinedTemplate;
