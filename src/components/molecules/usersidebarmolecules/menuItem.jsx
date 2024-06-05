import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart, faCog, faCreditCard, faMapMarkerAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Text from '../../atoms/usersidebaratoms/text';

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom : 3px solid #eee;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 3.5rem;
`;

const MenuText = styled(Text)`
  font-size: 16px;
`;

const iconMap = {
  order: faCartArrowDown,
  wishlist: faHeart,
  settings: faCog,
  payment: faCreditCard,
  delivery: faMapMarkerAlt,
  support: faHeadset,
};

const MenuItem = ({ icon, text }) => {
  return (
    <MenuItemContainer>
      <MenuIcon icon={iconMap[icon]} />
      <MenuText>{text}</MenuText>
    </MenuItemContainer>
  );
};

export default MenuItem;
