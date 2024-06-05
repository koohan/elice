import React from 'react';
import styled from 'styled-components';
import OrderSummary from '../../organisms/checkout/OrderSummary';
import OrderConfirmation from '../../organisms/checkout/OrderConfirmation';
import ShippingAddressForm from '../../molecules/checkout/ShippingAddressForm';
import PaymentMethod from '../../organisms/checkout/PaymentMethod';
import Button from '../../atoms/checkout/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top :  4rem;
  margin-bottom :  4rem;
`;

const Section = styled.section`
  background-color: #fff;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckoutTemplate = ({ items, total }) => (
  <Wrapper>
    <SummaryWrapper>
      <Section style={{ flex: 3.5 }}>
        <OrderSummary items={items} />
      </Section>
      <Section style={{ flex: 1 }}>
        <OrderConfirmation total={total} />
        <ButtonWrapper>
          <Button>주문하기</Button>
        </ButtonWrapper>
      </Section>
    </SummaryWrapper>
    <Section>
      <ShippingAddressForm />
    </Section>
    <Section>
      <PaymentMethod />
    </Section>
  </Wrapper>
);

export default CheckoutTemplate;