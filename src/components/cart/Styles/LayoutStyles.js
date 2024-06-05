import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const ContentLayout = styled.div`
  width: 100%;
`;

export const SidebarLayout = styled.div`
  width: 300px;
  z-index: 1;
`;

export const MainContent = styled.div`
  padding: 20px;
  background: #fff;
`;

export const CartContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;
