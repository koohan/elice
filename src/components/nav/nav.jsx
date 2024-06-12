import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Header, Logo, Navbar, NavLink, SearchContainer, SearchButton, SearchInput } from './Stylednav.js';

const NavBar = ({ setSearchQuery, searchInputRef }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['loginstate']);

  useEffect(() => {
    if (cookies.loginstate) {
      setIsLoggedIn(true);
    }
  }, [cookies]);

  const handleSearchClick = () => {
    if (searchActive) {
      setSearchQuery(searchInputRef.current);
    }
    setSearchActive((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    searchInputRef.current = e.target.value;
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    removeCookie('loginstate');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Header>
      <Logo src="src/assets/logo2.png" onClick={() => handleNavigation('/')} />
      <Navbar>
        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder="SEARCH" 
            className={searchActive ? 'active' : ''} 
            onChange={handleSearchChange}
          />
          <SearchButton 
            className={searchActive ? 'active' : ''} 
            onClick={handleSearchClick}
          >
            {searchActive ? 'CLICK' : 'SEARCH'}
          </SearchButton>
        </SearchContainer>
        {isLoggedIn ? (
          <NavLink onClick={handleLogout}>LOGOUT</NavLink>
        ) : (
          <NavLink onClick={() => handleNavigation('/login')}>LOGIN</NavLink>
        )}
        <NavLink onClick={() => handleNavigation('/carts')}>CART</NavLink>
        <NavLink onClick={() => handleNavigation('/account')}>MYPAGE</NavLink>
      </Navbar>
    </Header>
  );
};

export default NavBar;
