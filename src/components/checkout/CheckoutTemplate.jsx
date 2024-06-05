import React, { useState } from 'react';
import {
  Wrapper,
  Section,
  SummaryWrapper,
  ButtonWrapper,
  Title,
  Row,
  BoldRow,
  Table,
  THead,
  TBody,
  TableRow,
  Cell,
  OptionButton,
  InputWrapper,
  Label,
  StyledInput,
  StyledInputHigh,
  FormWrapper,
  ButtonStyle,
  FlexRow,
  InputHalf,
  InputFull,
  PaymentOptions,
  OptionWrapper,
  GlobalStyles
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCoffee, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Button = ({ children, onClick }) => (
  <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
);

const PaymentOptionButton = ({ icon, label, selected, onClick }) => (
  <OptionButton selected={selected} onClick={onClick}>
    {icon}
    {label}
  </OptionButton>
);

const OrderSummary = ({ items }) => (
  <Section>
    <Title>주문 요약</Title>
    <Table>
      <THead>
        <TableRow>
          <Cell>품목</Cell>
          <Cell>가격</Cell>
          <Cell>수량</Cell>
          <Cell>총계</Cell>
        </TableRow>
      </THead>
      <TBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <Cell>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={item.imageUrl} alt="제품 이미지" width={64} height={64} style={{ borderRadius: '8px' }} />
                <div>
                  <div>{item.name}</div>
                  <div style={{ color: '#666', fontSize: '12px' }}>색상: {item.color}, 사이즈: {item.size}</div>
                </div>
              </div>
            </Cell>
            <Cell>{item.price.toLocaleString('ko-KR')}원</Cell>
            <Cell>{item.quantity}</Cell>
            <Cell>{(item.price * item.quantity).toLocaleString('ko-KR')}원</Cell>
          </TableRow>
        ))}
      </TBody>
    </Table>
  </Section>
);

const OrderConfirmation = ({ total }) => (
  <Section>
    <Title>주문 확인</Title>
    <Row>
      <span>소계</span>
      <span>{total.toLocaleString('ko-KR')}원</span>
    </Row>
    <BoldRow>
      <span>총계</span>
      <span>{total.toLocaleString('ko-KR')}원</span>
    </BoldRow>
  </Section>
);

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');

  return (
    <Section>
      <Title>결제 수단</Title>
      <PaymentOptions>
        <OptionWrapper>
          <PaymentOptionButton
            icon={<FontAwesomeIcon icon={faCreditCard} />}
            label="신용카드"
            selected={selectedMethod === 'credit-card'}
            onClick={() => setSelectedMethod('credit-card')}
          />
        </OptionWrapper>
        <OptionWrapper>
          <PaymentOptionButton
            icon={<FontAwesomeIcon icon={faCoffee} />}
            label="카카오 페이"
            selected={selectedMethod === 'kakao-pay'}
            onClick={() => setSelectedMethod('kakao-pay')}
          />
        </OptionWrapper>
        <OptionWrapper>
          <PaymentOptionButton
            icon={<FontAwesomeIcon icon={faMobileAlt} />}
            label="네이버 페이"
            selected={selectedMethod === 'naver-pay'}
            onClick={() => setSelectedMethod('naver-pay')}
          />
        </OptionWrapper>
      </PaymentOptions>
    </Section>
  );
};

const ShippingAddressForm = () => (
  <Section>
    <Title>배송 주소</Title>
    <FormWrapper>
      <FlexRow>
        <InputFull>
          <InputHigh label="이름" placeholder="홍길동" />
        </InputFull>
        <InputFull>
          <InputHigh label="주소" placeholder="123 메인 스트리트" />
        </InputFull>
      </FlexRow>
      <FlexRow>
        <InputHalf>
          <Input label="시/도" placeholder="서울" />
        </InputHalf>
        <InputHalf>
          <Input label="구/군" placeholder="강남구" />
        </InputHalf>
        <InputHalf>
          <Input label="우편번호" placeholder="06234" />
        </InputHalf>
      </FlexRow>
    </FormWrapper>
  </Section>
);

const Input = ({ label, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <StyledInput {...props} />
  </InputWrapper>
);

const InputHigh = ({ label, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <StyledInputHigh {...props} />
  </InputWrapper>
);

const CheckoutTemplate = ({ items, total }) => (
  <Wrapper>
    <GlobalStyles />
    <SummaryWrapper>
      <OrderSummary items={items} />
      <Section style={{ flex: 1 }}>
        <OrderConfirmation total={total} />
        <ButtonWrapper>
          <Button>주문하기</Button>
        </ButtonWrapper>
      </Section>
    </SummaryWrapper>
    <ShippingAddressForm />
    <PaymentMethod />
  </Wrapper>
);

export default CheckoutTemplate;
