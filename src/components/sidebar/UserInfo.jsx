import React, { useEffect, useState } from 'react';
import { UserInfoContainer, UserBox, UserAvatar, UserText, UserEmail } from './styles/SidebarStyles';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('http://localhost:8000/api/users/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('사용자를 가져오는 데 실패했습니다.');
          }
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  const Mockuser = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    phone: '010-1234-1234'
  };

  const defaultUser = {
    name: 'GUEST',
    email: '엘리스 스토어입니다'
  };

  const displayedUser = user || defaultUser;

  return (
    <>
      <UserBox>
        <UserAvatar src={Mockuser.avatar} alt="User Avatar" />
      </UserBox>
      <UserInfoContainer>
        <UserText>{displayedUser.name}님 안녕하세요</UserText>
        <UserEmail>{displayedUser.email}</UserEmail>
        <UserEmail>{Mockuser.phone}</UserEmail>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
