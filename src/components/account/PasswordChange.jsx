import React, { useRef } from "react";
import {
  Container,
  Section,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  FlexContainer,
  InputSection,
  ReadOnlyInput,
  InstructionsSection,
  DelBtn
} from "./styles/PersonalInfoStyles";

const PasswordChange = ({ user }) => {
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === "Enter" && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const maskPassword = (password) => {
    const visibleLength = 2;
    const maskedLength = password.length - visibleLength;
    return "*".repeat(maskedLength) + password.slice(-visibleLength);
  };

  return (
    <Container>
      <Section>
        <Title>비밀번호</Title>
        <FlexContainer>
          <InputSection>
            <InputGroup>
              <Label>현재 비밀번호</Label>
              <ReadOnlyInput>{maskPassword(user.password)}</ReadOnlyInput>
            </InputGroup>
            <InputGroup>
              <Label>새 비밀번호</Label>
              <Input
                type="password"
                ref={newPasswordRef}
                onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
              />
            </InputGroup>
            <InputGroup>
              <Label>새 비밀번호 확인</Label>
              <Input
                type="password"
                ref={confirmPasswordRef}
                onKeyDown={(e) => handleKeyDown(e, null)}
              />
            </InputGroup>
            <Button>비밀번호 변경</Button>
            <DelBtn>탈퇴하기</DelBtn>
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
