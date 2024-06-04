import React from 'react';
import styled from 'styled-components';
import ImageBtn from '../../atoms/nav/ImageButton';
import SearchInput from '../../atoms/nav/SearchInput';
import searchIcon from '../../../assets/search.webp';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NavSearch = () => {
  const handleSearchClick = () => {
    console.log('검색 버튼');
    
  };

  return (
    <SearchContainer>
      <SearchInput />
      <ImageBtn src={searchIcon} alt="검색" onClick={handleSearchClick} />
    </SearchContainer>
  );
};

export default NavSearch;
