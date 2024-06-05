import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom : 50px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 16px;
  border-bottom : 1px solid #ddd;
`;

const BoldRow = styled(Row)`
  font-weight: bold;
  font-size: 18px;
`;

const OrderConfirmation = ({ total }) => (
  <Wrapper>
    <Title>주문 확인</Title>
    <Row>
      <span>소계</span>
      <span>{total.toLocaleString('ko-KR')}원</span>
    </Row>
    <BoldRow>
      <span>총계</span>
      <span>{total.toLocaleString('ko-KR')}원</span>
    </BoldRow>
  </Wrapper>
);

export default OrderConfirmation;