import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const StyledButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }

  & > svg {
    margin-right: 5px;
  }
`;

const WishlistButton = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    <FontAwesomeIcon icon={faHeart} />
    {children}
  </StyledButton>
);

export default WishlistButton;
