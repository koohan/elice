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

const MenuContainer = styled.div`
  width: 100%;
`;

const Sidebar = ({ user }) => {
  const menuItems = [
    { icon: 'order', text: '주문 내역' },
    { icon: 'wishlist', text: '위시리스트' },
    { icon: 'settings', text: '계정 설정' },
    { icon: 'payment', text: '결제 수단 관리' },
    { icon: 'delivery', text: '배송지 관리' },
    { icon: 'support', text: '고객센터' }
  ];

  return (
    <SidebarContainer>
      <UserInfo user={user} />
      <MenuContainer>
        {menuItems.map(item => (
          <MenuItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;