import React, { useState } from 'react';
import { Header, Logo, Navbar, NavLink, SearchContainer, SearchButton, SearchInput } from './Stylednav.js';

const NavBar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive((prev) => !prev);
  };

  return (
    <Header>
      <Logo src="src/assets/logo2.png" href='/' />
      <Navbar>
        <SearchContainer>
          <SearchInput type="text" placeholder="SEARCH" className={searchActive ? 'active' : ''} />
          <SearchButton className={searchActive ? 'active' : ''} onClick={handleSearchClick}>SEARCH</SearchButton>
        </SearchContainer>
        <NavLink href='/'>LOGIN</NavLink>
        <NavLink href='/'>CART</NavLink>
        <NavLink href='/'>MYPAGE</NavLink>
      </Navbar>
    </Header>
  );
}

export default NavBar;
