import React from 'react';
import { MenuItemContainer, MenuIcon } from './Styles/SidebarStyles';
import Label from './Label';
import { faCartArrowDown, faHeart, faCog, faCreditCard, faMapMarkerAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  order: faCartArrowDown,
  wishlist: faHeart,
  settings: faCog,
  payment: faCreditCard,
  delivery: faMapMarkerAlt,
  support: faHeadset,
};

const MenuItem = ({ icon, text }) => (
  <MenuItemContainer>
    <MenuIcon icon={iconMap[icon]} />
    <Label size="16px">{text}</Label>
  </MenuItemContainer>
);

export default MenuItem;
