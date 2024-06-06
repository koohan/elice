import React from 'react';
import { SidebarContainer, MenuContainer } from './styles/SidebarStyles';
import UserInfo from './UserInfo';
import MenuItem from './MenuItem';

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
