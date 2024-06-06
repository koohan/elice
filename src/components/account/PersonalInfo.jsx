import React from 'react';
import { Container, Section, Title, InputGroup, Label, Input, Button } from './styles/PersonalInfoStyles';

const PersonalInfo = ({ user }) => {
    return (
        <Container>
            <Section>
                <Title>{user.name} 님의 정보</Title>
                <InputGroup>
                    <Label>이름</Label>
                    <Input type="text" defaultValue={user.name} />
                </InputGroup>
                <InputGroup>
                    <Label>이메일</Label>
                    <Input type="email" defaultValue={user.email} />
                </InputGroup>
                <InputGroup>
                    <Label>전화번호</Label>
                    <Input type="text" defaultValue={user.phone} />
                </InputGroup>
                <Button>편집</Button>
            </Section>
        </Container>
    );
};

export default PersonalInfo;
