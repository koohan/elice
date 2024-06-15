import React from 'react';
import PersonalInfo from './PersonalInfo';
import PasswordChange from './PasswordChange';
import { Button, DelBtn } from "./styles/PasswordChangeStyles";

const Account = ({ user, mockUser }) => {


  return (
    <div style={{ marginTop: "2rem" }}>
      <PersonalInfo user={user} mockUser={mockUser} />
      <PasswordChange user={user} />
      <div style={{ display: "flex", width: "95%", margin: "0 auto", justifyContent: "end", marginBottom: "5rem" }}>
        <Button type="button">회원 정보 변경</Button>
        <DelBtn type="button" >회원 탈퇴하기</DelBtn>
      </div>
    </div>
  );
};

export default Account;
