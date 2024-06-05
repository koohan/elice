import React from 'react';
import { PageLayout, ContentLayout, SidebarLayout, MainContent, CartContainer } from './Styles/LayoutStyles';
import Sidebar from './Sidebar';
import CartList from './CartList';
import CartSummary from './CartSummary';
import { StyledButton, StyledShoppingButton } from './Styles/ButtonStyles';

const CombinedTemplate = ({ user, items }) => (
  <PageLayout>
    <SidebarLayout>
      <Sidebar user={user} />
    </SidebarLayout>
    <ContentLayout>
      <MainContent>
        <CartContainer>
          <CartList items={items} />
          <CartSummary />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <StyledShoppingButton>쇼핑하기</StyledShoppingButton>
            <StyledButton>결제하기</StyledButton>
          </div>
        </CartContainer>
      </MainContent>
    </ContentLayout>
  </PageLayout>
);

export default CombinedTemplate;
