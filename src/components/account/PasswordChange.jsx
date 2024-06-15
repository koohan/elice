import React, { useState } from "react";
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
  ReadOnlyInput
} from "./styles/PasswordChangeStyles";

const PasswordChange = ({ user }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePasswords = () => {
    if (newPassword === "" || confirmPassword === "") {
      setError("모든 필드를 입력해주세요.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    if (newPassword.length < 8) {
      setError("비밀번호는 최소 8자리여야 합니다.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      // 일요일 전까지 백엔드 api랑 연동
      // 커스텀 훅 관련 resolve 끝나면 작업 시작
      console.log("비밀번호 변경 성공");
    }
  };

  return (
    <Container>
      <Section>
        <Title>{user.name} 님의 비밀번호</Title>
        <FlexContainer>
          <InputSection>
            <InputGroup>
              <ReadOnlyInput>보안을 위해 주기적으로 비밀번호를 변경해주세요.</ReadOnlyInput>
            </InputGroup>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>새 비밀번호</Label>
                <Input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요."
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>새 비밀번호 확인</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <InputGroup>
                <Input type="submit" value="비밀번호 변경" />
              </InputGroup>
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
