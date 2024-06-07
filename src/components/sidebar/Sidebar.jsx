import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, MenuContainer } from "./styles/SidebarStyles";
import UserInfo from "./UserInfo";
import MenuItem from "./MenuItem";

const Sidebar = ({ user }) => {
  const menuItems = [
    { icon: "order", text: "주문 내역", path: "/orders" },
    { icon: "wishlist", text: "위시리스트", path: "/carts" },
    { icon: "settings", text: "계정 설정", path: "/account" },
    { icon: "payment", text: "결제 수단 관리", path: "아직 안 만듦" },
    { icon: "delivery", text: "배송지 관리", path: "아직 안 만듦" },
    { icon: "support", text: "고객센터", path: "/support" },
  ];

  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <UserInfo user={user} />
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => navigate(item.path)}
          />
        ))}
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
