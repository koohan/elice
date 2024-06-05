import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const AddtoWishlistButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 20px;
  height: 20px;

  & > svg {
    margin-right: 5px;
  }
`;

const WishlistButton = ({ children, onClick }) => (
  <AddtoWishlistButton onClick={onClick}>
    <FontAwesomeIcon icon={faHeart} />
    {children}
  </AddtoWishlistButton>
);

export default WishlistButton;
