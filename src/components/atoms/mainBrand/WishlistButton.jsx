import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const AddtoWishlistButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 12rem;
  height: 45px;

  &:hover {
    background-color: #f0f0f0;
  }

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
