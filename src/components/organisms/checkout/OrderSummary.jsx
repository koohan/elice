import React from 'react';
import styled from 'styled-components';

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
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  background-color: #f0f0f0;
`;

const TBody = styled.tbody`
`;

const Row = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

const Cell = styled.td`
  padding: 8px;
  text-align: left;

  &:last-child {
    text-align: right;
  }
`;

const OrderSummary = ({ items }) => (
  <Wrapper>
    <Title>주문 요약</Title>
    <Table>
      <THead>
        <Row>
          <Cell>품목</Cell>
          <Cell>가격</Cell>
          <Cell>수량</Cell>
          <Cell>총계</Cell>
        </Row>
      </THead>
      <TBody>
        {items.map((item, index) => (
          <Row key={index}>
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
          </Row>
        ))}
      </TBody>
    </Table>
  </Wrapper>
);

export default OrderSummary;