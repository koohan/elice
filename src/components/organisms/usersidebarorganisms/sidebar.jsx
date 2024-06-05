import React from 'react';
import UserInfo from '../../molecules/usersidebarmolecules/userInfo';
import MenuItem from '../../molecules/usersidebarmolecules/menuItem';
import styled from 'styled-components';
//background-color: #f9f9f9;
const SidebarContainer = styled.div`
  background-color: #fff;
  border-right : 1px solid #eee;
  padding: 20px;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = ({ user, menuItems }) => {
  return (
    <SidebarContainer>
      <UserInfo user={user} />
      <div style={{ width: '100%' }}>
        {menuItems.map(item => (
          <MenuItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
