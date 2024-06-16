import React from "react";
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
  Avatar,
  AvatarSection,
  Button,
} from "./styles/PersonalInfoStyles";
import Notification from "../notification/Notification";
import usePersonalInfo from "../../hook/usePersonalInfo";
import API_PATHS from "../../utils/apiPaths";

const PersonalInfoForm = ({ formData, handleChange }) => (
  <>
    <InputGroup>
      <Label>이름</Label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </InputGroup>
    <InputGroup>
      <Label>이메일</Label>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </InputGroup>
    <InputGroup>
      <Label>전화번호</Label>
      <Input
        type="tel"
        id="phone"
        name="phoneNumber"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        required
        value={formData.phoneNumber}
        onChange={handleChange}
      />
    </InputGroup>
  </>
);

const PersonalInfo = ({ user, mockUser }) => {
  const { formData, notification, handleChange, handleSubmit } = usePersonalInfo(user, API_PATHS.USER); 

  return (
    <Container>
      <Section>
        <Title>{formData.name} 님의 정보</Title>
        {notification && <Notification message={notification} />}
        <form onSubmit={handleSubmit}>
          <FlexContainer>
            <InputSection>
              <PersonalInfoForm formData={formData} handleChange={handleChange} />
            </InputSection>
            <AvatarSection>
              <Avatar src={mockUser.avatar} alt={`${formData.name} 님의 아바타`} />
            </AvatarSection>
          </FlexContainer>
          <Button style={{ height: "3rem", marginTop: "8px" }} type="submit">회원정보 변경</Button>
        </form>
      </Section>
    </Container>
  );
};

export default PersonalInfo;
