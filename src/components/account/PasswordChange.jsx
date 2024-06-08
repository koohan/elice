import React from "react";
import {
  Container,
  Section,
  Title,
  InputGroup,
  Label,
  FlexContainer,
  InputSection,
  InstructionsSection,
} from "./styles/commonStyles";
import {
  Input,
  Button,
  DelBtn,
  ReadOnlyInput,
} from "./styles/PasswordChangeStyles";
import usePasswordChange from "./usePasswordChange";

const PasswordChange = ({ user }) => {
  const {
    passwords,
    newPasswordRef,
    confirmPasswordRef,
    handleChange,
    handleKeyDown,
    handlePasswordChange,
    handleDeleteUser,
    maskPassword,
  } = usePasswordChange();

  return (
    <Container>
      <Section>
        <Title>{user.name} 님의 비밀번호</Title>
        <FlexContainer>
          <InputSection>
            <InputGroup>
              <Label>현재 비밀번호</Label>
              <ReadOnlyInput>{maskPassword(user.password)}</ReadOnlyInput>
            </InputGroup>
            <form onSubmit={handlePasswordChange}>
              <InputGroup>
                <Label>새 비밀번호</Label>
                <Input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleChange}
                  ref={newPasswordRef}
                  onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
                  autoComplete="new-password"
                />
              </InputGroup>
              <InputGroup>
                <Label>새 비밀번호 확인</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                  ref={confirmPasswordRef}
                  onKeyDown={(e) => handleKeyDown(e, null)}
                  autoComplete="new-password"
                />
              </InputGroup>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button type="submit">비밀번호 변경</Button>
                <DelBtn type="button" onClick={handleDeleteUser}>탈퇴하기</DelBtn>
              </div>
            </form>
          </InputSection>
          <InstructionsSection>
            <Label>안녕하세요 {user.name}님,</Label>
            <span style={{ lineHeight: "1.6", marginTop: "10px" }}>
              보안을 위해 정기적으로 비밀번호를 변경해 주시기 바랍니다.
            </span>
            <span style={{ lineHeight: "1.6", marginTop: "10px" }}>
              마지막 비밀번호 변경 이후 오랜 시간이 경과되었습니다.
            </span>
            <span style={{ lineHeight: "1.6", marginTop: "10px" }}>
              지금 비밀번호를 변경하셔서 귀하의 계정을 보호해 주시기 바랍니다.
            </span>
          </InstructionsSection>
        </FlexContainer>
      </Section>
    </Container>
  );
};

export default PasswordChange;
