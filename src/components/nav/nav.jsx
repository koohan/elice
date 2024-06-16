import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Header, Logo, Navbar, NavLink, SearchContainer, SearchButton, SearchInput } from './Stylednav';
import { useCookieManager } from '../../utils/cookies';

const NavBar = ({ setSearchQuery, searchInputRef }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies(['loginstate']);
  const { clearAllCookies } = useCookieManager();

  useEffect(() => {
    setIsLoggedIn(!!cookies.loginstate);
  }, [cookies]);

  const handleSearchClick = () => {
    if (searchActive && setSearchQuery && searchInputRef) {
      setSearchQuery(searchInputRef.current);
    }
    setSearchActive(prev => !prev);
  };

  const handleSearchChange = (e) => {
    if (searchInputRef) {
      searchInputRef.current = e.target.value;
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/login/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        clearAllCookies();
        setIsLoggedIn(false);
        navigate('/');
      } else {
        console.error('로그아웃에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그아웃 요청 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <Header>
      <Logo src="/assets/logo2.png" onClick={() => handleNavigation('/')} />
      <Navbar>
        {setSearchQuery && searchInputRef && (
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
        )}
        {isLoggedIn ? (
          <>
            <NavLink onClick={handleLogout}>LOGOUT</NavLink>
            <NavLink onClick={() => handleNavigation('/carts')}>CART</NavLink>
            <NavLink onClick={() => handleNavigation('/account')}>MYPAGE</NavLink>
          </>
        ) : (
          <NavLink onClick={() => handleNavigation('/login')}>LOGIN</NavLink>
        )}
      </Navbar>
    </Header>
  );
};

export default NavBar;
