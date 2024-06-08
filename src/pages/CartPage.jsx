import React from 'react';
import CombinedTemplate from '../components/cart/CombinedTemplate';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import useFetchData from '../hook/useFetchData';

const CartPage = () => {
  const user = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };

  const { data, loading, error } = useFetchData('/data.json');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  //Array.Prototype.flatMap <- mdn참조해보세요
  // 1. data.json 파일 구조 보면 [[[]]] 이런식
  // 2. 커스텀 훅으로 전달받은 data를 flatMap으로 1차 분해
  // 3. 분해한 product를 variants로 2차 분해
  // 추가 - variants같은 경우는 마지막 배열이라 map메서드로만 해결 가능
  // 4. variants 구조 분해 할당으로 쓰이는 것들 프롭스로 전달
  // 데이터 관리 준비하실때 제 설명 한번씩 참고해주세요
  // ui 개발 단계에선 프롭스 네이밍을 신경 안쓰고 했는데 데이터 구조화 됐다고 가정하고
  // 프롭스 네이밍을 구조 분해 할당 할때 나눠도 괜찮고 컴포넌트 단위로 들어가서 직접 바꿔도 괜찮아요
  const items = data.flatMap(({ product }) => 
    product.flatMap(({ variants }) => 
      variants.map(({ variantId, name, shortdescription, price, stock, images }) => ({
        id: variantId,
        product: {
          name,
          description: shortdescription,
          price,
          image: images[0]  
        },
        stock
      }))
    )
  );

  const totalAmount = items.reduce((acc, { product: { price }, stock }) => {
    return acc + price * stock;
  }, 0);

  return (
    <PageLayout>
      <SidebarLayout>
        <Sidebar user={user} />
      </SidebarLayout>
      <ContentLayout>
        <CombinedTemplate items={items} totalAmount={totalAmount} />
      </ContentLayout>
    </PageLayout>
  );
};

export default CartPage;
