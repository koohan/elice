import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const SidebarItem = ({ children }) => {
  return <Item>{children}</Item>;
};

export default SidebarItem;
