import React from 'react';
import CartTemplate from '../../templates/carttemplates/CartTemplate';
import NavBar from '../../organisms/nav/NavBar';
import styled from 'styled-components';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentLayout = styled.div`
  display: flex;
  flex: 1;
  margin-top: 4rem;
  margin-bottom: 4rem;
  justify-content: center;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #fff;
`;

const CartPage = () => {
  const items = [
    { id: 1, product: { name: '너무나 좋은 해변 수건', description: '흡수성이 뛰어난 면 수건', price: 19.99, image: 'path/to/image1.jpg' } },
    { id: 2, product: { name: '향긋한 애플 사이다 시럽', description: '맛있는 시럽으로 음료를 업그레이드하세요', price: 12.99, image: 'path/to/image2.jpg' } },
    { id: 3, product: { name: '가을 패션 모자', description: '스타일리시한 모자로 가을 옷차림을 완성하세요', price: 24.99, image: 'path/to/image3.jpg' } }
  ];

  return (
    <PageLayout>
      <NavBar />
      <ContentLayout>
        <MainContent>
          <CartTemplate items={items} />
        </MainContent>
      </ContentLayout>
    </PageLayout>
  );
};

export default CartPage;
