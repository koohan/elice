import React from 'react';
import { UserInfoContainer, UserBox, UserAvatar, UserText, UserEmail } from './Styles/SidebarStyles';

const UserInfo = ({ user }) => (
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

export default UserInfo;
