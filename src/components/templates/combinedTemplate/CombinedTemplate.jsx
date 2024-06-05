import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../organisms/usersidebarorganisms/sidebar';
import CartList from '../../organisms/cartorganisms/CartList';
import CartSummary from '../../organisms/cartorganisms/CartSummary';
import Button from '../../atoms/cartAtoms/Button';
import ShoppingButton from '../../atoms/cartAtoms/ShoppingButton';

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const ContentLayout = styled.div`
  margin: 5rem;
`;

const SidebarLayout = styled.div`
  width: 300px; 
  z-index: 1;
`;

const MainContent = styled.div`
  padding: 20px;
  background: #fff;
`;

const CartContainer = styled.div`
  width: 1000px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`;

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
            <ShoppingButton>쇼핑하기</ShoppingButton>
            <Button>결제하기</Button>
          </div>
        </CartContainer>
      </MainContent>
    </ContentLayout>
  </PageLayout>
);

export default CombinedTemplate;
