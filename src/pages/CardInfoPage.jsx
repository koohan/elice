import React from "react";
import CardInfo from "../components/CardInfo/CardInfo";
import NavBar from "../components/nav/nav";
import Sidebar from "../components/sidebar/Sidebar";
import {
  PageLayout,
  SidebarLayout,
  ContentLayout,
} from "../GlobalStyles/LayoutStyles";

const CardInfoPage = () => {
  return (
    <div>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          <CardInfo />
        </ContentLayout>
      </PageLayout>
    </div>
  );
};

export default CardInfoPage;
