import React from 'react';
import { Section, Title, Table, THead, TBody, TableRow, Cell } from './styles';

const OrderSummary = ({ items }) => (
  <Section>
    <Title>주문 요약</Title>
    <Table>
      <THead>
        <TableRow>
          <Cell>품목</Cell>
          <Cell>가격</Cell>
          <Cell>수량</Cell>
          <Cell>총 금액</Cell>
        </TableRow>
      </THead>
      <TBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <td style={{paddingLeft: "16px"}}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px' }}>
                <img src={item.imageUrl} alt="제품 이미지" width={64} height={64} style={{ borderRadius: '8px' }} />
                <div>
                  <div style={{ textAlign: 'left' }}>{item.name}</div>
                  <div style={{ color: '#666', fontSize: '12px' }}>색상: {item.color}, 사이즈: {item.size}</div>
                </div>
              </div>
            </td>
            <Cell>{item.price.toLocaleString('ko-KR')} 원</Cell>
            <Cell>{item.quantity}</Cell>
            <Cell>{(item.price * item.quantity).toLocaleString('ko-KR')} 원</Cell>
          </TableRow>
        ))}
      </TBody>
    </Table>
  </Section>
);

export default OrderSummary;
