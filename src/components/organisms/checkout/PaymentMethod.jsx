import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentOptionButton from '../../molecules/checkout/PaymentOptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCoffee, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Options = styled.div`
  display: flex;
  gap: 16px;
`;

const OptionWrapper = styled.div`
  flex: 1; 
`;
const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');

  return (
    <Wrapper>
      <Title>결제 수단</Title>
      <Options>
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
      </Options>
    </Wrapper>
  );
};

export default PaymentMethod;
