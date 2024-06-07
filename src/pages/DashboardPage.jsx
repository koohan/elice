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
      { id: 3210, brand: '나이키', amount: 42250, status: '판매중' },
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
