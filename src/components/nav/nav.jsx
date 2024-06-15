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

  // 아직 백엔드 엔드포인트가 없어서 주석 처리함...........
  // 밑에 handleLogout 함수도 훅으로 뺄건데 시간 부족 이슈로 수요일 이전까지 리팩토링 작업 할때 다시 봐야함
  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     try {
  //       const response = await fetch('/api/(나온 주소가 없음)', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       if (response.ok) {
  //         setIsLoggedIn(true);
  //       } else {
  //         throw new Error('Not authenticated');
  //       }
  //     } catch (error) {
  //       clearAllCookies();
  //       setIsLoggedIn(false);
  //       navigate('/login');
  //     }
  //   };
  //   checkAuthStatus();
  // }, [navigate, clearAllCookies]);

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
      <Logo src="/public/logo2.png" onClick={() => handleNavigation('/')} />
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
