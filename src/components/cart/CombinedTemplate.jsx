import React from "react";
import {
  PageLayout,
  ContentLayout,
  SidebarLayout,
  MainContent,
  CartContainer,
} from "./Styles/LayoutStyles";
import Sidebar from "./Sidebar";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { StyledShoppingButton } from "./Styles/ButtonStyles";

const CombinedTemplate = ({ user, items, totalAmount }) => (
  <PageLayout>
    <SidebarLayout>
      <Sidebar user={user} />
    </SidebarLayout>
    <ContentLayout>
      <MainContent>
        <CartContainer>
          <CartList items={items} />
          <CartSummary items={items} totalAmount={totalAmount} />
          <div style={{ display: "flex", margin: "20px", gap: "30rem" }}>
            <StyledShoppingButton style={{ flex: 1, backgroundColor: "#fff", color: "#000" }}>쇼핑하기</StyledShoppingButton>
            <StyledShoppingButton style={{ flex: 1, backgroundColor: "#000", color: "#fff" }}>결제하기</StyledShoppingButton>
          </div>
        </CartContainer>
      </MainContent>
    </ContentLayout>
  </PageLayout>
);

export default CombinedTemplate;
