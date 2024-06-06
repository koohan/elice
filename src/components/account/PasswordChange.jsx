import React, { useRef } from 'react';
import { Container, Section, Title, InputGroup, Label, Input, Button, ReadOnlyInput } from './styles/PersonalInfoStyles';

const PasswordChange = ({ user }) => {
    const currentPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleKeyDown = (e, nextInputRef) => {
        if (e.key === 'Enter' && nextInputRef) {
            nextInputRef.current.focus();
        }
    };

    const maskPassword = (password) => {
        const visibleLength = 2; 
        const maskedLength = password.length - visibleLength;
        return '*'.repeat(maskedLength) + password.slice(-visibleLength);
    };

    return (
        <Container>
            <Section>
                <Title>비밀번호</Title>
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
            </Section>
        </Container>
    );
};

export default PasswordChange;
