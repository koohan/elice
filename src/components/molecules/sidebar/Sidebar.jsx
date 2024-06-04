import React from 'react'
import styled from 'styled-components';
import SidebarItem from '../../atoms/sidebar/SidebarItem';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

const Sidebar = () => {
    return (
      <SidebarContainer>
        <SidebarItem>카테고리-1</SidebarItem>
        <SidebarItem>카테고리-2</SidebarItem>
        <SidebarItem>카테고리-3</SidebarItem>
        <SidebarItem>카테고리-4</SidebarItem>
      </SidebarContainer>
    );
  };

export default Sidebar
