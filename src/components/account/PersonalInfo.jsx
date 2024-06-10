import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Section,
  Title,
  InputGroup,
  Label,
  FlexContainer,
  InputSection,
} from "./styles/commonStyles";
import {
  Input,
  Button,
  Avatar,
  AvatarSection,
} from "./styles/PersonalInfoStyles";

const PersonalInfo = ({ user,Mockuser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phoneNumber);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === "Enter" && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const handleEdit = () => {
    console.log("Edited:", { name, email, phone });
  };

  return (
    <Container>
      <Section>
        <Title>{user.name} 님의 정보</Title>
        <FlexContainer>
          <InputSection>
            <InputGroup>
              <Label>이름</Label>
              <Input
                type="text"
                value={name}
                ref={nameInputRef}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, emailInputRef)}
              />
            </InputGroup>
            <InputGroup>
              <Label>이메일</Label>
              <Input
                type="email"
                value={email}
                ref={emailInputRef}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, phoneInputRef)}
              />
            </InputGroup>
            <InputGroup>
              <Label>전화번호</Label>
              <Input
                type="text"
                value={phone}
                ref={phoneInputRef}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, null)}
              />
            </InputGroup>
            <Button onClick={handleEdit}>편집</Button>
          </InputSection>
          <AvatarSection>
            <Avatar src={Mockuser.avatar} alt={`${user.name} 님의 아바타`} />
          </AvatarSection>
        </FlexContainer>
      </Section>
    </Container>
  );
};

export default PersonalInfo;
