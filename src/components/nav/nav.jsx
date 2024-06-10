import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Logo, Navbar, NavLink, SearchContainer, SearchButton, SearchInput } from './Stylednav.js';

const NavBar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setSearchActive((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Header>
      <Logo src="src/assets/logo2.png" onClick={() => handleNavigation('/')} />
      <Navbar>
        <SearchContainer>
          <SearchInput type="text" placeholder="SEARCH" className={searchActive ? 'active' : ''} />
          <SearchButton className={searchActive ? 'active' : ''} onClick={handleSearchClick}>SEARCH</SearchButton>
        </SearchContainer>
        <NavLink onClick={() => handleNavigation('/login')}>LOGIN</NavLink>
        <NavLink onClick={() => handleNavigation('/carts')}>CART</NavLink>
        <NavLink onClick={() => handleNavigation('/account')}>MYPAGE</NavLink>
      </Navbar>
    </Header>
  );
}

export default NavBar;
