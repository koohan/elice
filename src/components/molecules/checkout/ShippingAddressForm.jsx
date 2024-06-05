import React from 'react';
import styled from 'styled-components';
import { Input, InputHigh } from '../../atoms/checkout/Input';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const InputHalf = styled.div`
  flex: 1;
`;

const InputFull = styled.div`
  flex: 2;
`;

const ShippingAddressForm = () => (
  <FormWrapper>
    <h2>배송 주소</h2>
    <Row>
      <InputFull>
        <InputHigh label="이름" placeholder="홍길동" />
      </InputFull>
      <InputFull>
        <InputHigh label="주소" placeholder="123 메인 스트리트" />
      </InputFull>
    </Row>
    <Row>
      <InputHalf>
        <Input label="시/도" placeholder="서울" />
      </InputHalf>
      <InputHalf>
        <Input label="구/군" placeholder="강남구" />
      </InputHalf>
      <InputHalf>
        <Input label="우편번호" placeholder="06234" />
      </InputHalf>
    </Row>
  </FormWrapper>
);

export default ShippingAddressForm;