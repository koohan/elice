import React from 'react'
import styled from 'styled-components';
import SidebarItem from '../../atoms/sidebar/SidebarItem';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  margin-botton : 5rem;
`;

const Sidebar = () => {
    return (
      <SidebarContainer>
        <SidebarItem>장바구니</SidebarItem>
        <SidebarItem>위시리스트</SidebarItem>
        <SidebarItem>주문 내역</SidebarItem>
        <SidebarItem>내 정보</SidebarItem>
      </SidebarContainer>
    );
  };

export default Sidebar
