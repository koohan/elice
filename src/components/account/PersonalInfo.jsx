import React, { useRef, useEffect } from 'react';
import { Container, Section, Title, InputGroup, Label, Input, Button, Avatar, FlexContainer, InputSection, AvatarSection } from './styles/PersonalInfoStyles';

const PersonalInfo = ({ user }) => {
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const phoneInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    const handleKeyDown = (e, nextInputRef) => {
        if (e.key === 'Enter' && nextInputRef) {
            nextInputRef.current.focus();
        }
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
                                value={user.name} 
                                ref={nameInputRef} 
                                onKeyDown={(e) => handleKeyDown(e, emailInputRef)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label>이메일</Label>
                            <Input 
                                type="email" 
                                value={user.email} 
                                ref={emailInputRef} 
                                onKeyDown={(e) => handleKeyDown(e, phoneInputRef)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label>전화번호</Label>
                            <Input 
                                type="text" 
                                value={user.phone} 
                                ref={phoneInputRef} 
                                onKeyDown={(e) => handleKeyDown(e, null)}
                            />
                        </InputGroup>
                        <Button>편집</Button>
                    </InputSection>
                    <AvatarSection>
                        <Avatar src={user.avatar} alt={`${user.name} 님의 아바타`} />
                    </AvatarSection>
                </FlexContainer>
            </Section>
        </Container>
    );
};

export default PersonalInfo;
