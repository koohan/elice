import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Sidebar from "../components/sidebar/Sidebar";
import {
  PageLayout,
  SidebarLayout,
  ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import NavBar from "../components/nav/nav";

const DashboardPage = () => {
  const user = {
    avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    name: "홍길동",
    email: "honggildong@example.com",
    password: "12345",
    phone: "010-1234-5678",
  };
  const data = {
    priceData: {
      totalSales: 45231890,
      totalProducts: 12234,
      totalBrands: 2350,
      totalStock: 5673,
    },
    productList: [
        { id: 1, name: '아크메 프리즘 티셔츠', brand: '나이키', price: '20,000원', category: '남성 상의' },
        { id: 2, name: '선셋 비치 반바지', brand: '나이키', price: '20,000원', category: '남성 반바지' },
        { id: 3, name: '에코 플랜터', brand: '나이키', price: '20,000원', category: '홈데코' },
        { id: 4, name: '제스트 주서기', brand: '나이키', price: '20,000원', category: '주방용품' },
        { id: 5, name: '플렉시 웨어러블', brand: '나이키', price: '20,000원', category: '남성 액티브웨어' },
        { id: 6, name: '선셋 비치 타월', brand: '나이키', price: '20,000원', category: '액세서리' },
    ],
  };

  return (

    <>
    <NavBar/>
    <PageLayout>
      <SidebarLayout>
        <Sidebar user={user} />
      </SidebarLayout>
      <ContentLayout>
        <Dashboard data={data} />
      </ContentLayout>
    </PageLayout>
    </>
  );
};

export default DashboardPage;
