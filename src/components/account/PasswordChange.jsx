import React from 'react';
import { Container, Section, Title, InputGroup, Label, Input, Button } from './styles/PasswordChangeStyles';

const PasswordChange = ({user}) => {
    return (
        <Container>
            <Section>
                <Title>비밀번호</Title>
                <InputGroup>
                    <Label>현재 비밀번호</Label>
                    <Input type="password" defaultValue={user.password} />
                </InputGroup>
                <InputGroup>
                    <Label>새 비밀번호</Label>
                    <Input type="password" />
                </InputGroup>
                <InputGroup>
                    <Label>새 비밀번호 확인</Label>
                    <Input type="password" />
                </InputGroup>
                <Button>비밀번호 변경</Button>
            </Section>
        </Container>
    );
};

export default PasswordChange;
