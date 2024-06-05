import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
 margin-bottom: 20px;
 background-color: #f9f9f9;
  border-radius: 8px;
 padding: 20px;
  border: 3px solid #eee;
`;

const UserBox = styled.div`
  text-align : center;
`;

const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  padding: 2px;
  border: 3px solid #aaa;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UserText = styled.div`
  margin: 5px 0;
  font-weight: bold;
`;

const UserEmail = styled.div`
  margin: 5px 0;
  color: #666;
`;

const UserInfo = ({ user }) => {
  return (
    <>
         <UserBox>
        <UserAvatar src={user.avatar} alt="User Avatar" />
        </UserBox>
        <UserInfoContainer>
        <UserText>{user.name}</UserText>
        <UserEmail>{user.email}</UserEmail>
        <UserEmail>{user.phone}</UserEmail>
    </UserInfoContainer>
    </>
  );
};

export default UserInfo;
